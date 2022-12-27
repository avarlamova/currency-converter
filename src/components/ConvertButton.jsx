import React from 'react';

export default class ConvertButton extends React.Component {

    render () {
        const {getOutcome} = this.props;
        return(
            <div className = "convert-btn"> 
            <button onClick={getOutcome}> Convert</button>            </div>
        )
    };
}
