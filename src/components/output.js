import React from 'react';
import APIService from 'src/services/api-client.js';

export default class Output extends React.Component {

    apiclient = new APIService();

    state = {
        currency: '',
        amount: null,
        rate: '',
    };

    getCurrency() {
        this.apiclient.getResults()
        .then((x)=> {
            //console.log(x);
            this.setState({
                rate: x.rate,
            })
          });
    }

    render() {
        return(
        <div> 
            <span/> Currency
            <select>
                <option> AUD </option>
                <option>BGN</option>
            </select>
            <input type="number"  /> Sum
        </div>
        )
    }
}

