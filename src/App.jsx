import { useState } from "react";

function useCounter(){
    const [count , setCount] = useState(0);

    const increaseCount = () =>
    {
        setCount(c => c+1);
    }

    return {count : count ,increaseCount : increaseCount} ;
}

function App(){
    return(<>
        <Counter/>
    </>);
}

function Counter(){
    const {count ,increaseCount} = useCounter();

    return(<>
        <button onClick={increaseCount}>Increase {count}</button>
    </>);
}

export default App