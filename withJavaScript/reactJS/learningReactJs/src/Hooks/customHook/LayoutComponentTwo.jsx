import useWindowWidth from "./Hooks/useWindowWidth";

const LayoutComponentOne = () => {
    const res = useWindowWidth(600);

  return (
    <div>
        <h1>Layout Component Two uses CustomHook</h1>
        <br/>
        <br/>
        <h2>You're on {res? "Small" : "Large"} Device</h2>
    </div>
  )
}

export default LayoutComponentOne; 