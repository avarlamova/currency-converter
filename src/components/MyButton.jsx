import React from 'react';

export default class MyButton extends React.Component {

    render () {
        const {clickHandler, className, buttonText} = this.props;
        return(
            <button onClick={clickHandler} className={className}> {buttonText}  </button>
        )
    };
}
