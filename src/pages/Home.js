import { useContext } from "react"
import { AppContext } from "../App"
import { useQuery } from "@tanstack/react-query"
import Axios from "axios"

export const Home = () =>{
    
    const { data: catData, isLoading, isError, refetch } = useQuery(["cat"],()=> {
       return Axios.get("https://catfact.ninja/fact").then((res)=>res.data);
    });

    if(isLoading){
        return (<p>Data loading...</p>)
    }
    if(isError){
        return (<p>Error</p>)
    }

    return (
        <div>
            <h1>This is the home page and user is </h1>
            <p>{catData?.fact}</p>
            <button onClick={refetch}>Upadete</button>
        </div>
    )
}