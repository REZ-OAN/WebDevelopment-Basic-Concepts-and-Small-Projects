import React from "react";

class Click extends React.Component {
    render() {
        const {count,incrementCount} = this.props;
        return (
            <>
            <button onClick={incrementCount}>Clicked {count} Times This is by Rendering Props</button>
            </>
        );
    }
}
export default Click;