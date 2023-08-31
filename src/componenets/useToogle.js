import { useState, useContext, useEffect } from 'react';

export const useToogle = (initalValue) =>{
    const [state,setState] = useState(initalValue);
    
    const toggle = (prev) => {
        setState((prev)=>!prev)
    }
    return [state,toggle]
};