import React, { Component } from 'react';
import Header from './header';
import InputWindow from './inputwindow';
import Output from './output';
import APIService from './api-client.js';

export default class App extends Component {
state = {
    currency: '',
    amount: null,
    rate: null,
    outcome: null,
};

updateCurrency = (e) => {
    this.setState({
        currency: e.target.value,
    })
    console.log(this.state.currency);
}

apiСlient = new APIService();

getCurrency = () => {
    this.apiСlient.getresults()
    .then((x)=> {
        this.setState({
            rate: x.quotes.USDEUR.toFixed(2),
        });
      });
};

getOutcome = () => {
    //из предыдущей функции стейт не успевает обновиться, надо запускать отдельной(этой) функцией
            let result = this.state.amount/this.state.rate;
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
        amount = {this.state.amount}/>
        <Output
        rate = {this.state.rate}
        outcome = {this.state.outcome}
        getCurrency = {this.getCurrency}
        getOutcome = {this.getOutcome} />
    </div>
    )
};
}

