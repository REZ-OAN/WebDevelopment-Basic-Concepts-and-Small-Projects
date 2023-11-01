
class UniversalContext {
        constructor (value){
            this.state = {...value,};
        }
        // provider
        Provider = ({children,value})=>{
            this.state = {...value};
            return children;
        }
        // Consumer
        Consumer = ({children:childrenFunc})=>{
            return childrenFunc(this.state);
        }
       
}
function createUniversalContext(value=null){
    const newUniversalContext = new UniversalContext(value);
    return {
        Provider : newUniversalContext.Provider,
        Consumer : newUniversalContext.Consumer,
    };
}
  
export default createUniversalContext;