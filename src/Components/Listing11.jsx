import {useRef } from "react";
import '../App.css'

export function Listing11() {

    const inputElement = useRef();
    const focusInput = () => {
      inputElement.current.focus();
    };

    return (
        <>
            <div className="div-in">
                <input type="text" ref={inputElement} />
                <button onClick={focusInput}>Focus Input</button>
            </div>
        </>
    );
  
} 
