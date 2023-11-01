import React from "react";

const Counter = (Component)=>{
    class wrappedComponent extends React.Component {
        state = {
            count : 0,
        }
        incrementCount = ()=>{
            this.setState((prevState)=>{
                return {count: prevState.count +1 };
            });
        }
        render(){
            const {count} =  this.state;
            return  <Component count={count} incrementCount={this.incrementCount}/>;
           
        }
    }
    return wrappedComponent;
};
export default Counter;