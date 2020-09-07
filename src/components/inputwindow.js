import React from 'react';

export default class InputWindow extends React.Component {

    render() {
    const {onInput} = this.props;

        return(
        <div> 
            <form> 
            <span/> Currency
            <select>
                <option> AUD </option>
                <option>BGN</option>
            </select>
            </form>
            <form> 
                <span>Sum</span>
                <input type="number" onChange={onInput} placeholder=""/> 
            </form>
        </div>
        )
    }
}