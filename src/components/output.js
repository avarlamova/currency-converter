import React from 'react';
import APIService from './api-client.js';

export default class Output extends React.Component {

    apiСlient = new APIService();

   

    getOutcome = () => {
//из предыдущей функции стейт не успевает обновиться, надо запускать отдельной(этой) функцией
        let result = this.props.amount/this.props.rate;
        result.toFixed(2);
        this.setState({
            outcome: result,
        });
    }

    render() {
        const { rate, outcome } = this.props;
        return(
        <div> 
            <span/> Currency
            <select>
                <option> AUD </option>
                <option>BGN</option>
            </select>
            <input type="number" onChange={this.getCurrency} /> Sum
            <div>{rate}</div>
            <div>{outcome}</div>
            <button onClick={this.getOutcome}> BTN</button>
        </div>
        )
    }
}

