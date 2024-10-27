const paypal = require("paypal-rest-sdk");
require("dotenv").config(); // Load environment variables
paypal.configure({
  mode: "sandbox",
  client_id: process.env.CLIENT_ID,

  client_secret: process.env.CLIENT_SECRET,
});

module.exports = paypal;
