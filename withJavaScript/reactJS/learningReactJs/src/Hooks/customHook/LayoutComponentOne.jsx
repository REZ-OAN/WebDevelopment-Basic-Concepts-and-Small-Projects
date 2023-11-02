import React, {useEffect, useState} from 'react';

const LayoutComponentOne = () => {
    const [onSmallScreen,setonSmallScreen] = useState(false);
    const checkScreenSize = ()=>{
        setonSmallScreen(window.innerWidth<768);
    }
    useEffect(()=>{
        checkScreenSize();
        window.addEventListener('resize',checkScreenSize);
        return ()=> window.removeEventListener('resize',checkScreenSize);
    },[]);

  return (
    <div>
        <h1>Layout Component One</h1>
        <br/>
        <br/>
        <h2>{onSmallScreen ? 'You\'re on Small Screen' : 'You\'re on Big Screen'}</h2>
    </div>
  )
}

export default LayoutComponentOne;