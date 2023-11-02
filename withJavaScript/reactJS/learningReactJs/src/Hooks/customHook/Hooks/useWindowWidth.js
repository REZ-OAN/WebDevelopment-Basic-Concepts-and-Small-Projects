import {useEffect, useState} from "react";
// we can do what ever we want here passing parameters return tuple 
const useWindowWidth = (screenSize)=>{
    const [onSmallScreen,setonSmallScreen] = useState(false);
    // we can use useCallback to avoid the rerendering instead of doing the
    // code below
    useEffect(()=>{
        const checkScreenSize = ()=>{
            setonSmallScreen(window.innerWidth<screenSize);
        }
        checkScreenSize();
        window.addEventListener('resize',checkScreenSize);
        return ()=> window.removeEventListener('resize',checkScreenSize);
    },[screenSize]);
    return onSmallScreen;
}
export default useWindowWidth;