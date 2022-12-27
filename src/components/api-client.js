// const axios = require("axios");
import axios from "axios";

export default class APIService {
  // key = "a4d9e2aef3d51d3a2383";
  // url_base = "https://free.currconv.com/api/v7/convert?q";

  async getresults(base, target) {
    const options = {
      method: "GET",
      url: "https://free.currconv.com/api/v7/convert?q",
      params: { base: "USD", target: "RUB" },
      headers: {
        "Access-Control-Allow-Origin": "*",
        "x-rapidapi-host": "free.currconv.com",
        "x-rapidapi-key": process.env.API_KEY,
      },
    };
    axios
      .request(options)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // const response = await fetch(
    //   `${this.url_base}=${base}_${target}&compact=ultra&apiKey=${this.key}`
    // );
    // return await response.json(); // {BASE_TARGET: 0.04444}
  }
}
