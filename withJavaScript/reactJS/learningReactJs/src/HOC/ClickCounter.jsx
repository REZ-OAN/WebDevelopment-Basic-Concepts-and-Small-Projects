import React from "react";
import Counter from "./Counter";

class ClickCounter extends React.Component {
    render() {
        const {count,incrementCount} = this.props;
        return (
            <>
            <button onClick={incrementCount}>Clicked {count} Times by HOC</button>
            </>
        );
    }
}
export default Counter(ClickCounter);