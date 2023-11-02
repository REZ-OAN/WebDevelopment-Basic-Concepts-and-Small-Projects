import {useEffect, useState} from "react";

export default function GetPost() {
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState('');
    const [post, setPost] = useState({});
    
    // to sent request 
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
                .then(response => response.json())
                .then((data) => {
                    setLoading(false);
                    setPost(data);
                    setError('');
                })
                .catch((error) => {
                    setLoading(false);
                    setPost({});
                    setError(error.message);
                })
    },[]);
    return (
        <div>
           <div>
            <h3>{loading? 'Loading...' : "Title : " + post.title}</h3> 
            <p>{loading? 'Loading...' : `Description : ${post.body}`}</p> 
           </div>
            <h4>{error || null}</h4>
        </div>
    )   
}