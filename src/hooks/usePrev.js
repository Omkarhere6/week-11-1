import { useEffect, useRef } from "react"

export const usePrev = (value) =>{
    const ref = useRef(0);

    useEffect(() =>{
        ref.current = value ;
    },[value])

    return ref.current;
}


//It returns first , effect gets called later  