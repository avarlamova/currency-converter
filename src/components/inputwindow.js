import React from 'react';

export default class InputWindow extends React.Component {

    state = {
        currency: '',
        amount: null,
        rate: '',
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