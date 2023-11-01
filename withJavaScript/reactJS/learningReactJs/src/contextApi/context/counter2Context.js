import createUniversalContext from "../UniversalContext";

const counterContext = createUniversalContext({
    count : 0,
    incrementCount:()=>{},
});
export default counterContext;