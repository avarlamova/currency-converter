import React, { Component } from 'react';
import Header from './header';
import InputWindow from './inputwindow';
import Output from './output';
import APIService from './api-client.js';

export default class App extends Component {
state = {
    base_currency: 'USD',
    target_currency:'EUR',
    amount: null,
    rate: null,
    outcome: null,
};

updateBaseCurrency = (e) => {
    this.setState({
        base_currency: e.target.value,
    })
};

updateTargetCurrency = (e) => {
    this.setState({
        target_currency: e.target.value,
    })
}

apiСlient = new APIService();

getCurrency = () => {
    this.apiСlient.getresults(this.state.base_currency)
    .then((x,r)=> {
        this.setState({
            rate: x.rates[this.state.target_currency],
        });
      });
};

getOutcome = () => {
    //из предыдущей функции стейт не успевает обновиться, надо запускать отдельной(этой) функцией
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
        <Header/>
        <InputWindow
        onInput = {this.onInput}
        onFocus = {this.getCurrency}
        updateBaseCurrency = {this.updateBaseCurrency}
        amount = {this.state.amount}/>
        <Output
        rate = {this.state.rate}
        outcome = {this.state.outcome}
        updateTargetCurrency = {this.updateTargetCurrency}
        getCurrency = {this.getCurrency}
        getOutcome = {this.getOutcome} />
    </div>
    )
};
}

