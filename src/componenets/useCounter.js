import { useState } from "react";

export const useCounter = (initialValue) =>{
    const [counter, setCounter] = useState(initialValue)

    const increaseCounter = () =>{
        setCounter(counter + 1);
    }

    const decreaseCounter = () =>{
        setCounter(counter - 1)
    }

    const restartCounter = () =>{
        setCounter(0)
    }
    
    return {counter,increaseCounter,decreaseCounter,restartCounter}
}