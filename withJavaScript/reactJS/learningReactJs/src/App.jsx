import ClickCounter from "./HOC/ClickCounter";
import HoverCounter from "./HOC/HoverCounter";
import Parent from "./LiftingUpState/Parent";
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
    {/**Higher Order Component */}
    <ClickCounter/>
    <HoverCounter/>
    </>
  )
}

export default App
