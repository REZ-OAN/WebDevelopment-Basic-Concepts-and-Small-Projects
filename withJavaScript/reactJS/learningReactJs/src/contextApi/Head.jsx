import React from "react";
import ReactContent from "./ReactContent";
import Section from "./Section";
import counterContext from "./context/counterContext";
import countContext from "./context/reactContext";
export default class Head extends React.Component{

    state = {
        count : 0,
        countR : 0,
        incrementCount : ()=>{
            this.setState((prevState)=>{
                return {count: prevState.count +1};
            });
        },
        incrementCountR : ()=>{
            this.setState((prevState)=>{
                return {countR : prevState.countR + 1};
            })
        },
    }
    
    render() {
        const prop = {
            count : this.state.countR,
            incrementCount : this.state.incrementCountR,
        }
        
        return (
            <>
               <counterContext.Provider value={this.state}>
                    <Section/>
               </counterContext.Provider>
               <countContext.Provider value={prop}>
                    <ReactContent/>
               </countContext.Provider>
            </>
        );
    }

}
