import React from "react";

class CustomButton extends React.Component{
    // this auto re-rendering can be controlled with below function
    shouldComponentUpdate(nextProps){
        const {eventListener:currentEventListener,eventValue:currentEventValue,showValue:currentShowValue} = this.props;
        const {eventListener:futureEventListener,eventValue:futureEventValue,showValue:futureShowValue} = nextProps;
        if(currentEventListener === futureEventListener || (currentShowValue.value === futureShowValue.value && currentShowValue.isShow === futureShowValue.isShow)){
            return false;
        }
        return true;
    }
    render (){
        
        const {eventListener, eventValue, showValue } = this.props;
        console.log(`Button Rendering :  ${eventValue}`);
        return (
            <>
                <br/>
                <br/>
                <button onClick = {eventListener} > {eventValue} </button>
                <br/>
                <br/>
                <p>
                    {showValue? showValue.isShow? `Button Increment :  ${showValue.value}` : '' : ''}
                </p>
            </>
        );
    }
}

export default CustomButton;