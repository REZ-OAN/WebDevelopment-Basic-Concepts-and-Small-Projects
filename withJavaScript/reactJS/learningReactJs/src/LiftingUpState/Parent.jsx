import React from "react";
import Converter from './Converter.js';
import Input from "./Input.jsx";
import Message from "./Message.jsx";
export default class Parent extends React.Component {
    constructor(props){
        // two initialize the Component class
        super(props);
        // initializing the state 
        this.state = {
            value : '',
            type : 'c',
        };
    }
    changeValue = (event,type)=>{
        this.setState(()=>{
            return {
                value: event.target.value,
                type,
            };
        });
    }
    render() {
        const {value,type} = this.state;
        const cVal = type === 'f' ? Converter('c',value) : value;
        const fVal = type === 'c' ? Converter('f',value) : value;
        return (
            <>
                <Input inChange={this.changeValue} type='c' temp = {cVal}/>
                <Input inChange={this.changeValue} type='f' temp = {fVal}/>
                <Message temp={cVal}/>
            </>
        );
    }
}