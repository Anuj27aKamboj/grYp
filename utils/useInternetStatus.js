import React, {useEffect, useState} from 'react';

const useInternetStatus = () => {
    const [internetStatus, setInternetStatus ] = useState("🟢");

    // console.log(ineternetStatus);

    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            setInternetStatus("🔴")
        });

        window.addEventListener("online", ()=>{
            setInternetStatus("🟢")
        });
    },[]);

  return internetStatus;
}

export default useInternetStatus;