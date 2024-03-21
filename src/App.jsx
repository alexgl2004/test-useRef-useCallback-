import { useState, useEffect, useRef, useCallback } from "react";
import { Listing11 } from "./Components/Listing11.jsx";
import { Listing12 } from "./Components/Listing12.jsx";
import { Listing13 } from "./Components/Listing13.jsx";
import { Listing14 } from "./Components/Listing14.jsx";
import { Listing15 } from "./Components/Listing15.jsx";

import './App.css'

function App() {

  const [whatshow, setWhatshow] = useState('useRef1');

  const buttons = (
    <>
      <button onClick={()=>{setWhatshow('useRef1')}}>Listing 1.1</button>
      <button onClick={()=>{setWhatshow('useRef2')}}>Listing 1.2</button>
      
      <button onClick={()=>{setWhatshow('CallBack1')}}>Listing 1.3</button>  
      <button onClick={()=>{setWhatshow('CallBack2')}}>Listing 1.4</button>
      <button onClick={()=>{setWhatshow('CallBack2_2')}}>Listing 1.4(with CallBack)</button>
      <hr />
      <hr />
    </>
  )

  let out_var

  
  switch (whatshow){
    
    case 'useRef1':
      out_var = (
        <>
          <Listing11 />
        </>
      )
    break;    
    case 'useRef2':
      out_var = (
        <>
          <Listing12 />
        </>
      )
    break;
    case 'CallBack1':

      out_var = (
        <>
          <Listing13 />
        </>
      )
    break;
    case 'CallBack2':
      
      out_var = (
        <>
          <Listing14 />
        </>
      )
    break;
    case 'CallBack2_2':
      out_var = (
        <>
          <Listing15 />
        </>
      )
    break;

  }

  return (
    <>
      {buttons}    
      {out_var}
    </>
  )


}


export default App