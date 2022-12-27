import React from "react";

export default class InputWindow extends React.Component {
  render() {
    const {
      reversed,
      amount,
      onInput,
      updateBaseCurrency,
      getCurrency,
      targetCurrency,
      baseCurrency,
      currencies,
    } = this.props;

    return (
      <div className="currency-form">
        <span>From:</span>
        <select
          className="select-form"
          value={reversed ? targetCurrency : baseCurrency}
          onChange={updateBaseCurrency}
        >
          {currencies.map((currency) => (
            <option key={currency}>{currency}</option>
          ))}
        </select>
        <form>
          <span>Sum</span>
          <input
            type="number"
            onInput={onInput}
            onChange={getCurrency}
            placeholder=""
            defaultValue={amount}
          />
        </form>
      </div>
    );
  }
}
