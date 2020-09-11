import React, { Component} from 'react';
import Header from './header';
import InputWindow from './inputwindow';
import Output from './output';
import APIService from './api-client.js';
import './app.css';

export default class App extends Component {
state = {
    base_currency: 'USD',
    target_currency:'EUR',
    amount: null,
    rate: null,
    rateRounded: null,
    outcome: null,
    };

updateBaseCurrency = (e) => {
    this.setState({
        base_currency: e.target.value,
    })
};

updateTargetCurrency = (e) => {
    console.log('updated', this.state.target_currency);
    this.setState({
        target_currency: e.target.value,
    })
}

apiСlient = new APIService();

getCurrency = () => {
    this.apiСlient.getresults(this.state.base_currency)
    .then((x)=> {
        this.setState({
            rate: x.rates[this.state.target_currency],
            rateRounded: x.rates[this.state.target_currency].toFixed(2),
        });
      });
};


//при изменении инпутов не обновляется курс валюты
getOutcome = () => {
            let result = this.state.amount*this.state.rate;
            result = result.toFixed(2);
            this.setState({
                outcome: result,
            });
};

onInput = (e) => {
    this.setState({
        amount: e.target.value,
    })
};

render() {

    return(
    <div>
        <h1><Header/></h1>
        <InputWindow
        onInput = {this.onInput}
        getCurrency = {this.getCurrency}
        updateBaseCurrency = {this.updateBaseCurrency}
        amount = {this.state.amount}/>
        <Output
        rate = {this.state.rateRounded}
        outcome = {this.state.outcome}
        updateTargetCurrency = {this.updateTargetCurrency}
        getOutcome = {this.getOutcome} />
    </div>
    )
};
}

