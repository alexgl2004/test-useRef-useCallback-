import { useState, useCallback } from "react";
import '../App.css'

export function Listing13() {

    const [count, setCount] = useState(0);

    const showCount = useCallback(() => {
        console.log(count)
        setCount(count + 1)
    }, [count]);

    return (
    <>
        <button onClick={showCount}>Use showCount</button>
        <h1>{count}</h1>
    </>
    )

}