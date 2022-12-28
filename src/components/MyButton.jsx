import React from 'react';

export default class MyButton extends React.Component {

    render () {
        const {clickHandler, className, buttonText} = this.props;
        return(
            <div className={className}>
                <button  onClick={clickHandler}> {buttonText} </button>
            </div>
        )
    };
}
