const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51MC4XySDkAcNApaVatXLXVg3F4cmgrmZjVEGpVKdl2UMXq3mEzb3JO8ffgsZJUd1VIrsDmDEVk2GuSuT9bRrO6NJ00GykRYveo')//Secret Key

//API

//- API config
const app = express();

//- Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//- API routes
app.get('/', (request, response)=> response.status(200).send('hello world'));


app.post("/payments/create", async (request,response)=>{
    const total = request.query.total;

    console.log("Payment Request Received BOOM!! for this amount >>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "usd",
    });

    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//- Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint 
//http function initialized (http://127.0.0.1:5001/clone-2c7c1/us-central1/api)//prints 'hello world'.

