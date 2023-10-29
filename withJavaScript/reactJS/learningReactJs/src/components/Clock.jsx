import React from "react";
import CustomButton from "./CusButton";
class Clock extends React.Component {
    locale = ['bn-BD','en-US']
    // the atrributes and children will be recieved by the constructor using props
    constructor(props){
        // two initialize the Component class
        super(props);
        // initializing the state 
        this.state = {
            date : new Date(),
            count : 0,
            showVal : false,
            local_ : true,
        };
        this.clockTimer = null;
        /// and this.setState() is the function to update the state
    }
    // to know is the component was ready
    // automatically called by react and this is not a 
    // callback function that passed to an event handler
    componentDidMount(){
        // when the component mounts in the real dom
        // then this function fires automatically
     this.clockTimer =  setInterval(()=>{
            this.setState({
                date : new Date(),
            })
        },1000);
    }
    /// when component is to be unmounted from the screen then it fires the 
    // function automatically
    // but here we call it explicitly
    componentWillUnmount = () => {
        clearInterval(this.clockTimer);
    }  
    counter = (params)=>{

        this.setState((state,props)=>{
            // when we need previous state
            // we can separately update the state object properties
            // updates are merges means update that property which is changed
            // from props
            //return {count: state.count + parseInt(props.increment)}
            // we can pass parameter to the function using the bind method
            return {count: state.count + params.inc,showVal:true}
        });
    }
    // for creating the functions as arrow function automatically defines this with the class that it is declared 
    toggle = ()=>{
        this.setState((state,props)=>{
            return {local_: !state.local_,showVal:false}
        });
    }
    render(){
     return (
        <div className="center_class">
            <h1>Customized Clock</h1>
            {/**
             * to convert boolean into valid integer 0 and 1 then place unary + operator to the boolean
             */}
            <p>Time {this.props.local} : {this.state.date.toLocaleTimeString(this.locale[+ this.state.local_])}</p>
            {
            /*
                customized button component will be handling below staffs
            {
            /**jehetu amdr website e multiple routing nai tai click the jor kore call korano holo 
            
            }
            <button onClick={this.componentWillUnmount}>Button</button>
            <br/>
            <br/>
            {/**
             * to use .bind(first paramater is used to define the this keyword, then pass the parameters)
             }
            <button onClick={this.counter.bind(this,{inc : 4,})}> Current Value {this.state.count}</button>
            <br/>
            <br/>
            <button onClick={this.toggle}>Time Locale Toggler</button> 
            */}
            {/**
             *  the buttons are rendered but we don't update them as any functionality does not change in the 
             * button component
             * so why this re rendering happening 
             * because every child node got updated when the parent node is updating
             * can we control this?
             * and best practice is to pass parameters using the prop drilling method 
             */}
            <CustomButton eventListener = {this.componentWillUnmount} eventValue="STOP TIMER"/>
            {/* <CustomButton eventListener = {this.counter.bind(this,{inc:4})} eventValue="Increment" showValue ={{value: this.state.count,isShow:this.state.showVal,}} /> */}
            <CustomButton eventListener = {this.counter.bind(this,{inc:4})} eventValue="Increment" showValue ={{value: this.state.count,isShow:this.state.showVal,}} />
            <CustomButton eventListener = {this.toggle} eventValue  = "Toggle Timer"/>
        </div>
     );   
    }
}

export default Clock; 