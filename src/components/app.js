import React, { Component} from 'react';
import Header from './header';
import InputWindow from './inputwindow';
import Output from './output';
import APIService from './api-client.js';
import ReverseButton from './reversebutton';
import ConvertButton from './convertbtn';
import './app.css';

export default class App extends Component {
state = {
    base_currency: 'USD',
    target_currency: 'EUR',
    amount: 100,
    rate: null,
    rateRounded: null,
    outcome: undefined,
    rateReversed: null,
    rateReversedRounded: null,
    reversed: false,
    };

componentDidUpdate(prevState) {
            if (this.state.reversed === false)
                {
                if (prevState.base_currency !== this.state.base_currency || prevState.target_currency !== this.state.target_currency)
                this.getCurrency();
                }
            else if (this.state.reversed === true) {
                this.getCurrencyReversed();
            }
    };

updateBaseCurrency = (e) => {

    if (this.state.reversed === false)
    this.setState({
        base_currency: e.target.value,
    })
    else if(this.state.reversed === true) 
    this.setState({
        target_currency: e.target.value,
    })
};

updateTargetCurrency = (e) => {
    if (this.state.reversed === false)
    this.setState({
        target_currency: e.target.value,
    })
    else if(this.state.reversed === true) 
    this.setState({
        base_currency: e.target.value,
    })
};

onInput = (e) => {
    this.setState({
        amount: e.target.value,
    });
};

apiСlient = new APIService();

getCurrency = () => {
    this.apiСlient.getresults(this.state.base_currency, this.state.target_currency)
    .then((x)=> {
        let rateAcquired = `${this.state.base_currency}_${this.state.target_currency}`;
        this.setState({
            rate: x[rateAcquired],
            rateRounded: x[rateAcquired].toFixed(2),
        });
      });
    };

getCurrencyReversed = () => {
    this.apiСlient.getresults(this.state.target_currency,this.state.base_currency)
      .then((x)=> {
        let rateAcquired = `${this.state.target_currency}_${this.state.base_currency}`;
          this.setState({
              rateReversed: x[rateAcquired],
              rateReversedRounded: x[rateAcquired].toFixed(2),
          });
        });
}

getOutcome = () => {
    if (this.state.rate){
        if (this.state.reversed===false) {
            let result = this.state.amount*this.state.rate;
            result = result.toFixed(2);
            this.setState({
                outcome: result,
            });
            }
        else if (this.state.reversed === true) {
            let result = this.state.amount*this.state.rateReversed;
            result = result.toFixed(2);
            this.setState({
                outcome: result,
            });
        }
    }

    else {
        this.getCurrency();
    }
};

reverse = () => {
    this.setState({
        reversed: !this.state.reversed,
        outcome: null,
    })
}

render() {
    const {amount, target_currency, base_currency, outcome, rateRounded, reversed, rateReversedRounded } = this.state;
    return(
    <div className="container">
        <Header/>
        <div className="form-container"> 
        <InputWindow
        reversed = {reversed}
        target_currency = {target_currency}
        base_currency = {base_currency}
        onInput = {this.onInput}
        getCurrency = {this.getCurrency}
        updateBaseCurrency = {this.updateBaseCurrency}
        amount = {amount}/>
         <ReverseButton 
        reverse ={this.reverse}/>
        <Output
        target_currency = {target_currency}
        base_currency = {base_currency}
        rate = {rateRounded}
        reversed = {reversed}
        rateReversed = {rateReversedRounded}
        outcome = {outcome}
        updateTargetCurrency = {this.updateTargetCurrency}/>
        </div>
        <ConvertButton
        getOutcome = {this.getOutcome}/>
    </div>
    )
};
}

