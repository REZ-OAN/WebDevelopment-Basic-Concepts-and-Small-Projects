import {useEffect, useReducer} from "react";

//boiler pallete
const initialState = {
    loading : true,
    error :'',
    post : {},
};
const reducer = (currentState,action)=> {
    switch(action.type){
        case 'loading' :
            return {
                ...currentState,
                loading : action.value,
            };
        case 'error' :
            return {
                ...currentState,
                error : action.value,
            };
        case 'post' :
            return {
                ...currentState,
                post : action.value,
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
                        type : 'loading',
                        value : false,
                    });
                    dispatch({
                        type : 'post',
                        value: data,
                    });
                    dispatch({
                        type : 'error',
                        value : '',
                    });
                })
                .catch((error) => {
                    dispatch({
                        type : 'loading',
                        value : false,
                    });
                    dispatch({
                        type : 'post',
                        value: {},
                    });
                    dispatch({
                        type : 'error',
                        value : error.message,
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