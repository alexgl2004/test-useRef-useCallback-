import { useState, useEffect, useRef } from "react";
import '../App.css'

export function Listing12() {

    const [inputValue, setInputValue] = useState("");
    const count2 = useRef(0);

    useEffect(() => {
        count2.current = count2.current + 1;
    });


    return (
    <>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={() => {count2.current = count2.current + 1; console.log(count2); }}>Click me</button>
        <h1>Render Count: {count2.current}</h1>
    </>
    );

}