import React from "react";
import Click from "./Click";
import Content from "./Content";
import counter2Context from "./context/counter2Context";
import counterContext from "./context/counterContext";
export default class Section extends React.Component{
      
        state = {
            count : 0,
            incrementCount :()=>{
                this.setState((prevState)=>{
                    return {count: prevState.count +1 };
                });
            }
        }
        
       render() {
        return (
            <>
                <h1>Viewing From the Section.JSX</h1>
                <counter2Context.Provider value={this.state}>
                     <Content call="Rendering Call from Section.JSX"/>
                </counter2Context.Provider>
               
                <counterContext.Consumer>
                    {
                        (value)=>{
                            return (
                                <Click call="Rendering Call from Section.JSX" value={value}/>
                            );
                        }
                    }
                </counterContext.Consumer>
                
            </>
        );
    }
}