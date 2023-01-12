import React from "react";
import MyButton from "./MyButton";

export default class InputWindow extends React.Component {
  render() {
    const {
      amount,
      updateAmount,
      updateBaseCurrency,
      getCurrency,
      baseCurrency,
      currencies,
      targetCurrency, updateTargetCurrency,
      getOutcome
    } = this.props;

    return (
      <div className="currency-form">
        <form >
          <span>Sum: </span>
          <input
            type="number"
            onInput={updateAmount}
            onChange={getCurrency}
            placeholder=""
            defaultValue={amount}
          />
        </form>
        <span>From:</span>
        <select
          className="select-form"
          value={baseCurrency}
          onChange={(e) => updateBaseCurrency("baseCurrency", e)}
        >
          {currencies.map((currency) => (
            <option key={currency}>{currency}</option>
          ))}
        </select>
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
        <MyButton
            clickHandler={getOutcome}
            className={"convert-btn"}
            buttonText={"Convert"}
          />
      </div>
    );
  }
}
