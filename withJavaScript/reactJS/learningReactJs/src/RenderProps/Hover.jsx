import React from "react";

class Hover extends React.Component {
    render() {
        const {count,incrementCount} = this.props;
        return (
            <>
            <h1 onMouseOver = {incrementCount}>Hovered {count} Times This is by Rendering Props</h1>
            </>
        );
    }
}
export default Hover;