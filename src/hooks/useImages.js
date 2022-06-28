import { useState, useEffect } from "react"
import { API_KEY } from '../env'

export const useImages = () => {
    const [data, setData] = useState(null)
    const url = `https://api.thecatapi.com/v1/images/search?limit=30&size=small&api_key=${API_KEY}`

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (res.ok)
                    return res.json()
            })
            .then(setData)
    }, [url])
    
    return data ? data : null
}