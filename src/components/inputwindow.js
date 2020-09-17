import React from 'react';

export default class InputWindow extends React.Component {


    render() {
    const {amount, onInput, updateBaseCurrency, getCurrency, base_currency} = this.props;

        return(
        <div className="input-form"> 
            <span/> Currency
            <select value = {base_currency} onChange={updateBaseCurrency}>
                    <option value="AUD">AUD </option>
                    <option value="BGN">BGN</option>
                    <option value="BRL">BRL</option>
                    <option value="CAD">CAD</option>
                    <option value="CHF">CHF</option>
                    <option value="CZK">CZK</option>
                    <option value="DKK">DKK</option>
                    <option value="HKD">HKD</option>
                    <option value="ISK">ISK</option>
                    <option value="PHP">PHP</option>
                    <option value="HUF">HUF</option>
                    <option value="RON">RON</option>
                    <option value="SEK">SEK</option>
                    <option value="IDR">IDR</option>
                    <option value="INR">INR</option>
                    <option value="RUB">RUB</option>
                    <option value="HRK">HRK</option>
                    <option value="JPY">JPY</option>
                    <option value="THB">THB</option>
                    <option value="SGD">SGD</option>
                    <option value="PLN">PLN</option>
                    <option value="TRY">TRY</option>
                    <option value="CNY">CNY</option>
                    <option value="NOK">NOK</option>
                    <option value="NZD">NZD</option>
                    <option value="ZAR">ZAR</option>
                    <option value="USD">USD</option>
                    <option value="MXN">MXN</option>
                    <option value="ILS">ILS</option>
                    <option value="GBP">GBP</option>
                    <option value="KRW">KRW</option>
                    <option value="MYR">MYR</option>
                    <option value="EUR"> EUR </option>
            </select>
            <form> 
                <span>Sum</span>
                <input type="number" onInput={onInput} onChange = {getCurrency} placeholder="" defaultValue={amount}/> 
            </form>
        </div>
        )
    }
}