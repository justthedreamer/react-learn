import { useState } from "react";
import { useContext } from "react";
import App, { AppContext } from "./App";

export const ChangeProfile = () => {
    const [newUsername,setNewUsername] = useState("");
    const {username,setUsername} = useContext(AppContext);

    return (
        <div>
            {""}
            <input type="text" onChange={(e)=>{setNewUsername(e.target.value)}}/>
            <button onClick={()=>{setUsername(newUsername)}}>Change Username</button>
        </div>
    )
};