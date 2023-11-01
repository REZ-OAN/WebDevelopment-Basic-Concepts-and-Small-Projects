import Clock from "./components/Clock";
import Parent from "./LiftingUpState/Parent";
function App() {

  return (
    <>
    {/** understanding props */}
      <Clock increment='3'/>
    {/** understanding the uplift props */}
    <Parent/>
    </>
  )
}

export default App
