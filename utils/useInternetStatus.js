import React, {use, useEffect, useState} from 'react';

const useInternetStatus = () => {
    const [ineternetStatus, setInternetStatus ] = useState("/online.png");

    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            setInternetStatus("/offline.png")
        });

        window.addEventListener("offline", ()=>{
            setInternetStatus("/online.png")
        });
    },[]);

  return ineternetStatus;
}

export default useInternetStatus;