import { useEffect } from "react";
import { useState } from "react";

const useAsyncMock = (mock) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const newMockPromice = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mock)
        }, 1000)
    })
    useEffect(() => {
        newMockPromice.then((res) => { setData(res), setLoading(false) })
    }, [])

    return { data, loading };
}

export default useAsyncMock;