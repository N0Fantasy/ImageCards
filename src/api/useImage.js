import { useState, useEffect } from "react"

export const useImages = () => {
    const [data, setData] = useState(null)
    const url = "https://api.waifu.im/random/?is_nsfw=true&many=true"

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (res.ok)
                    return res.json()
            })
            .then(setData)
    }, [])

    return data ? data.images : null
}