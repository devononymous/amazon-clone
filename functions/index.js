const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "pk_test_51KHBvjSB6TpNdcHdxfNkzZe9tedRZpYraENM2Uf2veK0oXORL2FXdkLcsm9YTrfROFHpFP0hSEiDThsGN0exipC300veuI2tIO"
);

// 
// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
// app.get("/dev", (request, response) => response.status(200).send("Sushil you got of React JS Full stack developer ans also you are young entreprenuer"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  
  console.log('Payment Request Received BOOM!!! for this amount >>>', total);
  
  const paymentIntent = await stripe.paymentIntents.create({
    amount:total, // subunits of the currency
    currency:"usd",
  });
  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })

  
})

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-4b2b2/us-central1/api