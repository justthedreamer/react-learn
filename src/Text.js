import React, { useState } from "react";

export const Text = () =>{
    const [text,setText] = useState("");

    return (
        <div>
            <input type="text" onChange={(event)=>{
                setText(event.target.value);
            }} />
            <p>{text}</p>
        </div>
    )
}