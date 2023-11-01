import React from "react";

export default class Message extends React.Component {
        render(){
            const {temp} = this.props;
            const msg = temp>=100 ? "Is Boiling" : "Water";
            return (<h1>{msg}</h1>);
        }
}
