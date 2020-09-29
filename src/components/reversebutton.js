import React from 'react';

export default class ReverseButton extends React.Component {

    state = {
        base: this.props.base_currency,
        target: this.props.target_currency,
    }

    reverseChild = () => {
        this.setState(
            {
                base: this.state.target,
                target: this.state.base,
            }
        );
        console.log(this.state.base, this.state.target)
    }

    render () {
        const {reverse} = this.props;
        return(
            <div>
                <button onClick={reverse}> Reverse </button>
            </div>
        )
    };
}
