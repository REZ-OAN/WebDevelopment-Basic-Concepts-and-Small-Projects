import React from "react";
import Counter from "./Counter";

class HoverCounter extends React.Component {
    render() {
        const {count,incrementCount} = this.props;
        return (
            <>
            <h1 onMouseOver = {incrementCount}>Hovered {count} Times</h1>
            </>
        );
    }
}
export default Counter(HoverCounter);