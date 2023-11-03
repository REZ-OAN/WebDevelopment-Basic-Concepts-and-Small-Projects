import {Suspense} from "react";
import Qoute from "./FetchApi/Qoute";
import TopComp from "./FetchApi/React-Query/TopComp";
import ClickCounter from "./HOC/ClickCounter";
import HoverCounter from "./HOC/HoverCounter";
import Custom from "./Hooks/customHook/Custom";
import ComplexCounter from "./Hooks/useReducer/ComplexCounter";
import CounterP from "./Hooks/useReducer/Counter";
import Khela from "./Hooks/useReducer/FetchingData Application of useState and useEffect/Khela";
import MultipleCounter from "./Hooks/useReducer/MultipleCounter";
import Top from "./Hooks/useReducer/NestedComponents/Top";
import Parent from "./LiftingUpState/Parent";
import Click from "./RenderProps/Click";
import Counter from "./RenderProps/Counter";
import Hover from "./RenderProps/Hover";
import Clock from "./components/Clock";
import CompostitionEx from "./composition/CompositionEx";
import Head from "./contextApi/Head";

function App() {

  return (
    <>
    {/** understanding props */}
    <h1>**UnderStanding Props start**</h1>
      <Clock increment='3'/>
    <h1>**UnderStanding Props end**</h1>
    {/** understanding the uplift props */}
    <h1>**UnderStanding Uplifting Props start**</h1>
    <Parent/>
    <h1>**UnderStanding Uplifting Props end**</h1>
    {/**Understanding the composition */}
    <h1>**UnderStanding Composition start**</h1>
    <CompostitionEx/>
    <h1>**UnderStanding Composition end**</h1>
    {/**Higher Order Component This reduces the props drilling*/}
    <h1>**UnderStanding HOC start**</h1>
    <ClickCounter/>
    <HoverCounter/>
    <h1>**UnderStanding HOC end**</h1>
    {/** Render Props this also reduces the props drilliing */}
    <h1>**UnderStanding Render Props start**</h1>
    {/* <Counter render={(count,incrementCount)=>{
      return (
      <>
      <Click count={count} incrementCount={incrementCount}/>
      </>
      );
      }
      } />
      <Counter render={(count,incrementCount)=>{
      return (
      <>
      <Hover count={count} incrementCount={incrementCount}/>
      </>
      );
      }
      } /> */}
      {/**
       * can be written like below
       */}
       <Counter>
        {
          (count,incrementCount) =>{
            return (
              <Click count={count} incrementCount={incrementCount}/>
            );
          }
        }
       </Counter>
       <Counter>
        {
          (count,incrementCount) =>{
            return (
              <Hover count={count} incrementCount={incrementCount}/>
            );
          }
        }
       </Counter>
       <h1>**UnderStanding Render Props end**</h1>
       {/**
        * Context api concept implementation
        */}
        <h1>**UnderStanding ContextAPI start**</h1>
        <Head/>
        <h1>**UnderStanding ContextAPI end**</h1>
        <h1>**UnderStanding useReducer start**</h1>
        <h3>Normal Counter</h3>
        <CounterP/>
        <h3>Complex Counter</h3>
        <ComplexCounter/>
        <h3>Multiple Counter</h3>
        <MultipleCounter/>
        <br/>
        <br/>
        <Top/>
        <br/>
        <br/>  
        <Khela/>
        <h1>**UnderStanding useReducer end**</h1>
        <br/>
        <br/>
        <h1>**UnderStanding Creating Custom Hook start**</h1>
        <Custom/>
        <h1>**UnderStanding Creating Custom Hook end**</h1>
        <h1>**UnderStanding Fetching Data From API start**</h1>
          <Suspense fallback={<h1>"Loading..."</h1>} >
            {/** because we have created suspense behaviour in qoute */}
            <Qoute/>
          </Suspense>
          <h2>Fetching Data using React-Query</h2>
             <TopComp/>
        <h1>**UnderStanding Fetching Data From API end**</h1>
    </>
  )
}

export default App
