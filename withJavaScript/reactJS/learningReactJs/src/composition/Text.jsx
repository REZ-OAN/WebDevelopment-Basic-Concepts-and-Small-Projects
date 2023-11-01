import React from "react";
export default class Text extends React.Component {
    render (){
        
        const {text,addEmoji,addBracket} = this.props;
        console.log(text);
        let newText = text;
        if(addEmoji) {
            newText = addEmoji(newText,'💜');
        }
        if(addBracket) {
            newText = addBracket(newText);
        }
        return (
            <div>
                <h1>{newText}</h1>
            </div>
        );
    }

}
