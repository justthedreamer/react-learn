import { useGetCat } from "./useGetCat"


export const Cat = () =>{
    const {data, isCatLoading, refetchData} = useGetCat();
    if(isCatLoading) return <p> loading... </p>
    return (
        <div>
            <p>{data?.fact}</p>
            <button onClick={refetchData}>refetch</button>
        </div>
    )
}