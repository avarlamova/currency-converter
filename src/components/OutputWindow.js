import React from "react";

export default class OutputWindow extends React.Component {
  render() {
    const { rate, outcome, targetCurrency, updateTargetCurrency, currencies } =
      this.props;

    return (
      <div className="currency-form">
        <span>To:</span>
        <select
          className="select-form"
          value={targetCurrency}
          onChange={(e) => updateTargetCurrency("targetCurrency", e)}
        >
          {currencies.map((currency) => (
            <option key={currency}>{currency}</option>
          ))}
        </select>
        <form>
          <span>Sum </span>
          <input type="number" defaultValue={outcome} />
        </form>
        <div>
          <div>Rate: {rate}</div>
        </div>
      </div>
    );
  }
}
