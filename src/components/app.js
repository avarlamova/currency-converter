import React, { Component } from "react";
// import Header from "./header";
import InputWindow from "./InputWindow";
import OutputWindow from "./OutputWindow";
import MyButton from "./MyButton";
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
    currencies: [],
  };

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
        alert(
          "An error occurred while trying to retrieve the list of currencies. Please try later!"
        );
      });
  }

  updateCurrency = (option, e) => {
    this.setState({
      [option]: e.target.value,
      rate: null,
      rateRounded: null,
      outcome: null,
    });
  };

  updateAmount = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  getRate = () => {
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
        this.setState(
          {
            rate: response.data,
            rateRounded: response.data.toFixed(2),
          },
          this.computeResult
        );
      })
      .catch((err) => {
        console.log(err);
        alert("An error occured when requesting rates data. Please try later");
      });
  };

  computeResult = () => {
    let result = this.state.amount * this.state.rate;
    result = result.toFixed(2);
    this.setState({
      outcome: result,
    });
  };

  getOutcome = () => {
    if (!this.state.rate) {
      this.getRate();
    } else {
      this.computeResult();
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
    }, this.getRate);
  };

  render() {
    const {
      amount,
      targetCurrency,
      baseCurrency,
      outcome,
      rateRounded,
      currencies,
    } = this.state;
    return (
      <div className="container">
        {/* <Header /> */}
        <div className="form-container">
          <InputWindow
            currencies={currencies}
            baseCurrency={baseCurrency}
            updateAmount={this.updateAmount}
            getCurrency={this.getRate}
            updateBaseCurrency={this.updateCurrency}
            amount={amount}
            targetCurrency={targetCurrency}
            updateTargetCurrency={this.updateCurrency}
            getOutcome={this.getOutcome}
          />
          <MyButton
            clickHandler={this.reverse}
            className={"reverse-btn"}
            buttonText={"Reverse"}
          />
          <OutputWindow
            currencies={currencies}
            rate={rateRounded}
            outcome={outcome}
          />
        </div>
      </div>
    );
  }
}
