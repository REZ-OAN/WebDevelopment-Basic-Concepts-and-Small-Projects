import React from "react";

export default class Input extends React.Component{
    names =  {
        'c' : 'Celcius',
        'f' : 'Fahrenheit',
    };
    render() {
        const {temp,type,inChange} = this.props;
        return (
            <fieldset>
                <legend>Enter temperature in {this.names[type]}:</legend>
                <input
                    type="text"
                    value={temp}
                    onChange={(e) => inChange(e, type)}
                />
            </fieldset>
        );
    }
}