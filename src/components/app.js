import React, { Component} from 'react';
import Header from './header';
import InputWindow from './inputwindow';
import Output from './output';
import APIService from './api-client.js';
import ReverseButton from './reversebutton';
import './app.css';

export default class App extends Component {
state = {
    base_currency: 'USD',
    target_currency:'EUR',
    amount: 100,
    rate: null,
    rateRounded: null,
    outcome: undefined,
    };

componentDidUpdate(prevState) {
        if (prevState.base_currency !== this.state.base_currency || prevState.target_currency !== this.state.target_currency) {
            this.getCurrency();
        }    
};

updateBaseCurrency = (e) => {
    this.setState({
        base_currency: e.target.value,
    })
};

updateTargetCurrency = (e) => {
    this.setState({
        target_currency: e.target.value,
    });
};

onInput = (e) => {
    this.setState({
        amount: e.target.value,
    });
};

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

getOutcome = () => {
    if (this.state.rate){
        let result = this.state.amount*this.state.rate;
        result = result.toFixed(2);
        this.setState({
            outcome: result,
        });
    }

    else {
        this.getCurrency();
    }
};

reverse = () =>{
    this.setState({
        target_currency: this.state.base_currency,
        base_currency: this.state.target_currency,
    })
}


render() {
    const {amount, target_currency, base_currency, outcome, rateRounded, } = this.state;
    return(
    <div>
        <Header/>
        <InputWindow
        base_currency = {base_currency}
        onInput = {this.onInput}
        getCurrency = {this.getCurrency}
        updateBaseCurrency = {this.updateBaseCurrency}
        amount = {amount}/>
        <ReverseButton
        reverse = {this.reverse} />
        <Output
        target_currency = {target_currency}
        rate = {rateRounded}
        outcome = {outcome}
        updateTargetCurrency = {this.updateTargetCurrency}
        getOutcome = {this.getOutcome} />
    </div>
    )
};
}

