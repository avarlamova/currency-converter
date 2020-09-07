import React from 'react';

export default class Output extends React.Component {

    render() {
        const { rate, outcome, getOutcome, getCurrency, updateCurrency } = this.props;
        return(
        <div> 
            <form onChange={updateCurrency}> 
                <span/> Currency
                <select>
                    <option value="AUD"> AUD </option>
                    <option value="BGN">BGN</option>
                </select>
            </form>
            <input type="number" value = {outcome} /> Sum
            <div>Rate: {rate}</div>
            <button onClick={getCurrency}> BTN1</button>
            <button onClick={getOutcome}> Convert</button>
        </div>
        )
    }
}

