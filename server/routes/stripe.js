const express = require("express");
const router = express.Router();

const {
  createCheckoutSession,
  handleStripeWebhook,
} = require("../controllers/stripe");

router
  .post("/create-checkout-session", createCheckoutSession)
  .post(
    "/webhook",
    express.raw({ type: "application/json" }),
    handleStripeWebhook
  );

module.exports = router;
