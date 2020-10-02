import React from 'react';

export default class ReverseButton extends React.Component {

    render () {
        const {reverse} = this.props;
        return(
            <div className="reverse-btn">
                <button  onClick={reverse}> Reverse </button>
            </div>
        )
    };
}
