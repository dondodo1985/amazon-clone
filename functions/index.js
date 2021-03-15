const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51IR3mmHOodGlzdhHsToNsHb6U6Og3E5PSbKVqXLKnswCs" +
    "G4avx6hoEEU0HkcspICemHsSwdCAeBakM8CWHdvoElS00hleANGJo"
);

// -- App

// -- App Config
const app = express();

// -- Middlewares

app.use(cors({origin: true}));
app.use(express.json());

// -- API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });
  // Ok + create
  response.status(201).send({clientSecret: paymentIntent.client_secret});
});

// -- Listen command
exports.api = functions.https.onRequest(app);

// example of endpoint
// http://localhost:5001/challenge-97b58/us-central1/api
