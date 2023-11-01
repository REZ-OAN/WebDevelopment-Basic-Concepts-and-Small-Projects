import ClickCounter from "./HOC/ClickCounter";
import HoverCounter from "./HOC/HoverCounter";
import Parent from "./LiftingUpState/Parent";
import Click from "./RenderProps/Click";
import Counter from "./RenderProps/Counter";
import Hover from "./RenderProps/Hover";
import Clock from "./components/Clock";
import CompostitionEx from "./composition/CompositionEx";
function App() {

  return (
    <>
    {/** understanding props */}
      <Clock increment='3'/>
    {/** understanding the uplift props */}
    <Parent/>
    {/**Understanding the composition */}
    <CompostitionEx/>
    {/**Higher Order Component This reduces the props drilling*/}
    <ClickCounter/>
    <HoverCounter/>
    {/** Render Props this also reduces the props drilliing */}
    <Counter render={(count,incrementCount)=>{
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
      } />
    </>
  )
}

export default App
