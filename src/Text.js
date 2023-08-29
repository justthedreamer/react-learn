import React, { useState, useEffect } from "react";


export const Text = () =>{
    const [text,setText] = useState("");
    
    useEffect(()=>{
        console.log('Component mounted')

        return () => {
            console.log("Component unmounted");
        }
    }, [])

    return (
        <div>
            <input type="text" onChange={(event)=>{
                setText(event.target.value);
            }} />
            <p>{text}</p>
        </div>
    )
}