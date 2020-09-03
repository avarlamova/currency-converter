import React, { Component } from 'react';
import Header from './header';
import InputWindow from './inputwindow';
import Output from './output';
import APIService from './api-client.js';


export default class App extends Component {
state = {
    currency: '',
    amount: 500,
    rate: null,
    outcome: null,
};

apiСlient = new APIService;

getCurrency = () => {

    this.apiСlient.getresults()
    .then((x)=> {
        this.setState({
            rate: x.quotes.USDEUR,
        });
      });
};

render() {

    return(
    <div>
        <Header/>
        <InputWindow
        onChange = {this.getCurrency} />
        <Output />
    </div>
    )
};
}

