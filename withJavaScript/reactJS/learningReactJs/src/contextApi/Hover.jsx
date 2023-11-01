import React from "react";

class Hover extends React.Component {
    render() {
        const {call,value} = this.props;
        return (
            <>
            <h1>This is Hover</h1>
            <h1 onMouseOver = {value.incrementCount}>Hovered {value.count} Times This is by Rendering Props</h1>
            <h3>{call}</h3>
            </>
        );
    }
}
export default Hover;