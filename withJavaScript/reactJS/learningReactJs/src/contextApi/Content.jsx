import React from "react";
import Hover from "./Hover";
import counter2Context from "./context/counter2Context";
export default class Content extends React.Component{
    render() {
        const {call} = this.props;
        return (
            <>
                <h1>Viewing From the Content.JSX</h1>
                <counter2Context.Consumer>
                    {
                        (value)=>{
                            return (
                                <Hover call="Rendered From the Content.jsx" value={value}/>
                            );
                        }
                    }
                </counter2Context.Consumer>
                <h3>{call}</h3>
            </>
        );
    }
} 