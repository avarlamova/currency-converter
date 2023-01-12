import React from "react";

export default class OutputWindow extends React.Component {
  render() {
    const { rate, outcome } = this.props;

    return (
      <div className="currency-form">
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
