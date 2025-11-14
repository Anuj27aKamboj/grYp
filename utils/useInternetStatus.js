import React, {useEffect, useState} from 'react';

const useInternetStatus = () => {

    const [internetStatus, setInternetStatus ] = useState(true);

    // console.log(ineternetStatus);

    useEffect(()=>{
        const handleOnline = () => setInternetStatus(true);
        const handleOffline = () => setInternetStatus(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };

    },[]);

  return internetStatus;
}

export default useInternetStatus;