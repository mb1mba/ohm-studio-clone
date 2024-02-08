const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

/**
 * Create a Stripe Checkout session for processing payments.
 **/

const createCheckoutSession = asyncHandler(async (req, res) => {
  const { cartItems, name, userId } = req.body;

  const customer = await stripe.customers.create({
    metadata: {
      customerName: name,
      userId,
      cart: JSON.stringify(req.body.cartItems),
    },
  });

  const line_items = cartItems.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: ["http://localhost:5500/uploads/ban-black01.png"],
          metadata: {
            id: item.id,
          },
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    };
  });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "FR"],
      },
      phone_number_collection: { enabled: true },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 0,
              currency: "usd",
            },
            display_name: "Free shipping",
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 5,
              },
              maximum: {
                unit: "business_day",
                value: 7,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 1500,
              currency: "usd",
            },
            display_name: "Next day air",
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 1,
              },
              maximum: {
                unit: "business_day",
                value: 1,
              },
            },
          },
        },
      ],
      customer: customer.id,
      line_items,
      mode: "payment",
      success_url: "http://localhost:5173/checkout-success",
      cancel_url: "http://localhost:5173/",
    });

    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

/**
 * Creates an order
 **/

const createOrder = async (customer, data) => {
  const Items = JSON.parse(customer.metadata.cart);

  const newOrder = new Order({
    userId: customer.metadata.userId,
    customerId: data.customer,
    customerName: customer.metadata.name,
    paymentIntentId: data.payment_intent,
    orderItems: Items,
    paymentMethod: data.payment_method_types[0],
    paymentStatus: data.payment_status,
    shipping: data.customer_details,
    subtotalPrice: data.amount_subtotal / 100,
    totalPrice: data.amount_total / 100,
  });

  try {
    const savedOrder = await newOrder.save();
    console.log("Proccessed order", savedOrder);
  } catch (error) {
    console.log(error);
  }
};

let endpointSecret;
//   endpointSecret =
// "whsec_e8f7b786e403d592eaa5c462e61e61496153a11208363aab0764902e0a057b8f";

const handleStripeWebhook = asyncHandler(async (req, res) => {
  console.log(req.body);
  const sig = req.headers["stripe-signature"];
  let data;
  let eventType;

  if (endpointSecret) {
    let event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
      console.log("Webhook verified: ", event.id);
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
    data = event.data.object;
    eventType = event.type;
  } else {
    data = req.body.data.object;
    eventType = req.body.type;
  }

  // Handle the event
  if (eventType === "checkout.session.completed") {
    stripe.customers
      .retrieve(data.customer)
      .then((customer) => {
        console.log("Customer: ", customer, "Data: ", data);
      })
      .catch((err) => {
        console.log("Error retrieving customer:", err);
      });
  }
  // Return a 200 res to acknowledge receipt of the event
  res.send().end();
});

module.exports = {
  createCheckoutSession,
  handleStripeWebhook,
};
