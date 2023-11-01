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
    </>
  )
}

export default App
