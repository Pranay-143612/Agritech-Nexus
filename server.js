const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

// Razorpay credentials
const razorpay = new Razorpay({
  key_id: "rzp_test_wBAHDV66do1lWQ", // Replace with your Razorpay API Key
  key_secret: "n8f7DiBh0GabuDGfhRiJDat3",
});

app.use(cors());
app.use(bodyParser.json());

// Endpoint to create Razorpay order
app.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;
    const order = await razorpay.orders.create({
      amount: amount, // Amount in paise
      currency: "INR",
      receipt: "receipt#1",
      payment_capture: 1, // Auto-capture payment
    });

    res.json({
      orderId: order.id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating Razorpay order");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
