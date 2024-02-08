const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    customerName: { type: String, required: true },
    customerId: { type: String },
    paymentIntentId: { type: String },
    orderItems: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
        image: { type: String, required: true },
        productId: { type: String, required: true },
      },
    ],
    paymentMethod: { type: String, required: true },
    shipping: { type: Object, required: true },
    subtotalPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    deliveryStatus: { type: String, required: true, default: "pending" },
    paymentStatus: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
