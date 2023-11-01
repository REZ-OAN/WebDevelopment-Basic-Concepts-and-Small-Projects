import React from 'react';
import Bracket from "./Bracket";
import Emoji from "./Emoji";
import Text from "./Text";
export default class CompostitionEx extends React.Component {

    render() {
        return (
            <>
            <Emoji>
                {
                    ({addEmoji})=>{
                        return (
                            <Bracket>
                            {
                                ({addBracket}) => {
                                   return (
                                    <Text addBracket={addBracket} addEmoji={addEmoji} text="JavaScript IS Bosss"/>
                                   );
                                }
                            }
                        </Bracket>
                        );
                    }
                }
            </Emoji>
            </>
        );
    }
}