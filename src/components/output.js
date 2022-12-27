import React from "react";

export default class Output extends React.Component {
  render() {
    const {
      baseCurrency,
      reversed,
      rate,
      outcome,
      targetCurrency,
      updateTargetCurrency,
      rateReversed,
      currencies,
    } = this.props;

    return (
      <div className="currency-form">
        <span>To:</span>
        <select
          className="select-form"
          value={reversed ? baseCurrency : targetCurrency}
          onChange={updateTargetCurrency}
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
          {reversed ? (
            <div>Rate: {rateReversed} </div>
          ) : (
            <div>Rate: {rate}</div>
          )}
        </div>
      </div>
    );
  }
}
