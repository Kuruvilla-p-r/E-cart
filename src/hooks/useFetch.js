import { useEffect, useState } from "react"

//user defined hooks
const useFetch = (url)=>{// to fetch data from url
    const [data,setData] = useState("")
    useEffect(()=>{
        fetch(url).then((res)=>{
            res.json().then((arrayData)=>setData(arrayData.products))
        })
    },[url])
    return data
}
export default useFetch