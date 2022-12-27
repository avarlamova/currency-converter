import React, { Component } from "react";
import Header from "./header";
import InputWindow from "./inputwindow";
import Output from "./output";
// import APIService from "./api-client.js";
import ReverseButton from "./reversebutton";
import ConvertButton from "./convertbtn";
import "./app.css";
import axios from "axios";

export default class App extends Component {
  state = {
    baseCurrency: "USD",
    targetCurrency: "EUR",
    amount: 100,
    rate: null,
    rateRounded: null,
    outcome: null,
    // rateReversed: null,
    // rateReversedRounded: null,
    // reversed: false,
    currencies: [],
  };

  // componentDidUpdate(prevState) {
  //   if (this.state.reversed === false) {
  //     if (
  //       prevState.baseCurrency !== this.state.baseCurrency ||
  //       prevState.targetCurrency !== this.state.targetCurrency
  //     )
  //       this.getCurrency();
  //   } else if (this.state.reversed === true) {
  //     this.getCurrencyReversed();
  //   }
  // }

  //get the list of all possible currencies
  async componentDidMount() {
    const reqOptions = {
      method: "GET",
      url: "http://localhost:3001/list",
    };

    axios
      .request(reqOptions)
      .then((response) => {
        this.setState({
          currencies: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  updateBaseCurrency = (e) => {
    // if (this.state.reversed === false)
    this.setState({
      baseCurrency: e.target.value,
    });
    // else if (this.state.reversed === true)
    //   this.setState({
    //     targetCurrency: e.target.value,
    //   });
  };

  updateTargetCurrency = (e) => {
    // if (this.state.reversed === false)
    this.setState({
      targetCurrency: e.target.value,
    });
    // else if (this.state.reversed === true)
    //   this.setState({
    //     baseCurrency: e.target.value,
    //   });
  };

  onInput = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  // apiСlient = new APIService();

  getCurrency = () => {
    const options = {
      method: "GET",
      url: "http://localhost:3001/convert",
      params: {
        baseCurrency: this.state.baseCurrency,
        targetCurrency: this.state.targetCurrency,
        quantity: this.state.amount,
      },
    };

    axios
      .request(options)
      .then((response) => {
        this.setState({
          rate: response.data,
          rateRounded: response.data.toFixed(2),
        });
      })
      .catch((err) => {
        console.log(err);
        alert("An error occured when requesting rates data. Please try later");
      });
  };

  // getCurrencyReversed = () => {
  //   this.apiСlient
  //     .getresults(this.state.targetCurrency, this.state.baseCurrency)
  //     .then((x) => {
  //       let rateAcquired = `${this.state.targetCurrency}_${this.state.baseCurrency}`;
  //       this.setState({
  //         rateReversed: x[rateAcquired],
  //         rateReversedRounded: x[rateAcquired].toFixed(2),
  //       });
  //     });
  // };

  getOutcome = () => {
    if (this.state.rate) {
      // if (this.state.reversed === false) {
      let result = this.state.amount * this.state.rate;
      result = result.toFixed(2);
      this.setState({
        outcome: result,
      });
    } else {
      this.getCurrency();
    }
  };

  reverse = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        baseCurrency: prevState.targetCurrency,
        targetCurrency: prevState.baseCurrency,
        outcome: null,
      };
    });
    this.getCurrency();
  };

  render() {
    const {
      amount,
      targetCurrency,
      baseCurrency,
      outcome,
      rateRounded,
      reversed,
      rateReversedRounded,
      currencies,
    } = this.state;
    return (
      <div className="container">
        <Header />
        <div className="form-container">
          <InputWindow
            currencies={currencies}
            reversed={reversed}
            targetCurrency={targetCurrency}
            baseCurrency={baseCurrency}
            onInput={this.onInput}
            getCurrency={this.getCurrency}
            updateBaseCurrency={this.updateBaseCurrency}
            amount={amount}
          />
          <ReverseButton reverse={this.reverse} />
          <Output
            currencies={currencies}
            targetCurrency={targetCurrency}
            baseCurrency={baseCurrency}
            rate={rateRounded}
            reversed={reversed}
            rateReversed={rateReversedRounded}
            outcome={outcome}
            updateTargetCurrency={this.updateTargetCurrency}
          />
        </div>
        <ConvertButton getOutcome={this.getOutcome} />
      </div>
    );
  }
}
