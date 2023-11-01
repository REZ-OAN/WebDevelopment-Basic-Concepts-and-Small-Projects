import React from "react";
class Click extends React.Component {
    render() {
        
        const {call,value} = this.props
        return (
            <>
            <h1>This is Click</h1>
            <button onClick={value.incrementCount}>Clicked {value.count} Times This is by Rendering Props</button>
            <h3>{call}</h3>
            </>
        );
    }
}
export default Click;