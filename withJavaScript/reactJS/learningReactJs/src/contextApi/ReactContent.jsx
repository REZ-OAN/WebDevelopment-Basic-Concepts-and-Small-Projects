import {useContext} from "react";
import Click from "./Click";
import countContext from "./context/reactContext";
const  ReactContent = () => {    
        const context = useContext(countContext);
        const {count,incrementCount} = context;
        const value ={
            count,
            incrementCount,
        }
       
        return (
            <>
                <h1>Viewing From the ReactContent.JSX</h1>
                <Click call="Rendering Call from Section.JSX" value={value}/>
                
            </>
        );
    
}
export default ReactContent;