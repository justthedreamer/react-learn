import { ChangeProfile } from "../ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = (props)=>{
    const {username} = useContext(AppContext);

    return (
        <div>
            <p>Prifle site. user is {username}</p>
            <ChangeProfile/>
        </div>
    );
}