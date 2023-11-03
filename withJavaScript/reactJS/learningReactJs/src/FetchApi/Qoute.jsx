import axios from 'axios';
import {useEffect, useState} from 'react';
import useSWR from 'swr';
const fetcher = async (...args) =>{
    const res = await axios.get(...args);
     return res;
} 
export default function Qoute(){
  
    const [qoute1,setQoute1] = useState(null);
    const [qoute2,setQoute2] = useState(null);
    // data from swr
    // sesher jei function ta fetcher she tar ager shob parameter gulo ...args e pabe
    // we can give the suspense behaviour into swr in 3rd param
    const {data,error} = useSWR('https://api.quotable.io/random',fetcher,{
        suspense : true,
    });
    
    useEffect(()=>{
        // useEffect er moddhe jei callback function ta sheta async hote pare na
        // tai amra ekhane ekta async function create kore sheta ei call back e call kore dibo
        const fetchQoutes = async ()=>{
            const res = await fetch('https://api.quotable.io/random');
            const data = await res.json();
            setQoute1(data);
        }
        const axiosQoutes = async ()=>{
            const res = await axios.get('https://api.quotable.io/random');
            setQoute2(res.data);
        }
        //fetchapi
        fetchQoutes(); 
        //axious
        axiosQoutes();
    },[]);
    return (
        <div>
            <h1>Get Qoutes Using Fetch Api</h1>
            <div>{qoute1?.content}</div>
            <h1>Get Qoutes Using Axios</h1>
            <div>{qoute2?.content}</div>
            <h1>Get Qoutes Using SWR</h1>
            <div>{data.data.content}</div>

        </div>
    );
}