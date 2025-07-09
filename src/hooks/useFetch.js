import { useEffect } from "react";
import { useState } from "react";

export function useFetch(link){
    const [loading ,setLoading] = useState(true);
    const [response ,setResponse] = useState([]);
    
    async function getPosts(){
        setLoading(true);
       await fetch(link)
      .then(response => response.json())
      .then(json => setResponse(json))
      setLoading(false);

    }

    useEffect(()=>{
        getPosts()    
    },[link])

    return {response: response ,loading:loading};
}