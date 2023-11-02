import {useEffect, useReducer} from "react";

//boiler pallete
const initialState = {
    loading : true,
    error :'',
    post : {},
};
const reducer = (currentState,action)=> {
    switch(action.type){
        case 'SUCCESS' :
            return {
                loading : action.value.loading,
                error : action.value.error,
                post : action.value.post,
            };
        case 'FAILURE' :
            return {
                loading : action.value.loading,
                error : action.value.error,
                post : action.value.post,
            };
        default :
            return currentState;
    }
}
export default function GetPostUsingReducer() {
    const [state,dispatch] = useReducer(reducer,initialState);
    
    // to sent request 
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
                .then(response => response.json())
                .then((data) => {
                    dispatch({
                        type : 'SUCCESS',
                        value : {
                            loading : false,
                            post : data,
                            error : '',
                        }
                    });
                })
                .catch((error) => {
                    dispatch({
                        type : 'FAILURE',
                        value : {
                            loading : false,
                            post : {},
                            error : error.message,
                        }
                    });
                })
    },[]);
    return (
        <div>
           <div>
            <h3>{state.loading? 'Loading...' : "Title : " + state.post.title}</h3> 
            <p>{state.loading? 'Loading...' : `Description : ${state.post.body}`}</p> 
           </div>
            <h4>{state.error || null}</h4>
        </div>
    )   
}