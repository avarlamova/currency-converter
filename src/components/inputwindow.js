import React from 'react';

export default class InputWindow extends React.Component {
    render() {
        return(
        <div> 
            <input type="range"  /> Currency
            <input type="number"  /> Sum
        </div>
        )
    }
}