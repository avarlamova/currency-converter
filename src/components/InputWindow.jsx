import React from "react";

export default class InputWindow extends React.Component {
  render() {
    const {
      amount,
      updateAmount,
      updateBaseCurrency,
      getCurrency,
      baseCurrency,
      currencies,
    } = this.props;

    return (
      <div className="currency-form">
        <span>From:</span>
        <br></br>
        <select
          className="select-form"
          value={baseCurrency}
          onChange={(e) => updateBaseCurrency("baseCurrency", e)}
        >
          {currencies.map((currency) => (
            <option key={currency}>{currency}</option>
          ))}
        </select>
        <form>
          <span>Sum</span>
          <input
            type="number"
            onInput={updateAmount}
            onChange={getCurrency}
            placeholder=""
            defaultValue={amount}
          />
        </form>
      </div>
    );
  }
}
