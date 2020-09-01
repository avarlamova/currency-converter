import React from 'react';

export default class Output extends React.Component {

    render() {
        return(
        <div> 
            <span/> Currency
            <select>
                <option> AUD </option>
                <option>BGN</option>
            </select>
            <input type="number"  /> Sum
        </div>
        )
    }
}

