import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { usePrev } from "./hooks/usePrev";
import { useDebounce } from "./hooks/useDebounce";


function App(){
    const {response , loading} = useFetch("https://jsonplaceholder.typicode.com/posts");
    const [count ,setCount] = useState(0);
    const [inputValue , setInputValue]  =useState("");
    const debouncedValue = useDebounce(inputValue,300);
    useEffect(()=>{
        console.log("Hellow there ")
    },[debouncedValue])

    const prev = usePrev(count);
    return(<>
        <h1>{count}</h1>
        <button onClick={() => {
            setCount(c => c + 1 )
        }}>Click</button>
        <div>The previous value was {prev}</div>

        <input type="text" 
        onChange={(e) =>{
            setInputValue(e.target.value)
        }}/>

        {loading ? "loading....." : JSON.stringify(response)}
    </>);
}

export default App