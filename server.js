const PORT = 3001;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.json("hi");
});

app.use(cors());

app.listen(PORT, () => {
  console.log("listening");
});
app.get("/convert", (req, res) => {
  const { baseCurrency, targetCurrency, quantity } = req.query;
  const options = {
    method: "GET",
    url: "https://currency-exchange.p.rapidapi.com/exchange",
    params: { from: baseCurrency, to: targetCurrency, q: quantity },
    headers: {
      "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.API_KEY,
    },
  };
  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/list", (req, res) => {
  const options = {
    method: "GET",
    url: "https://currency-exchange.p.rapidapi.com/listquotes",
    headers: {
      "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.API_KEY,
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});
