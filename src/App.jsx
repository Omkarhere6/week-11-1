import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { usePrev } from "./hooks/usePrev";


function App(){
    const {response , loading} = useFetch("https://jsonplaceholder.typicode.com/posts");
    const [count ,setCount] = useState(0);
    const prev = usePrev(count);
    return(<>
        <h1>{count}</h1>
        <button onClick={() => {
            setCount(c => c + 1 )
        }}>Click</button>
        <div>The previous value was {prev}</div>
        {loading ? "loading....." : JSON.stringify(response)}
    </>);
}

export default App