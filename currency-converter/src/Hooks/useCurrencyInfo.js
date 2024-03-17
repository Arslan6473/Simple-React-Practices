import axios from "axios"
import { useEffect, useState } from "react"



export const useCurrencyInfo = (currency)=>{
   const [data, setData] = useState({})
    useEffect(()=>{
     (async ()=>  {
        const response = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
         const data = response.data
         setData(data[currency])
       })()

    },[currency])

    return data

}

export default useCurrencyInfo