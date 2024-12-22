

import {  useState , useEffect } from "react"


export default function App() {

  const [Counter, setcounter] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount ? parseInt(savedCount, 10) : 0; 
  });



useEffect(() => {
  localStorage.setItem('count', Counter); // Count Save in to the localstorage
}, [Counter]); 



const additem = () =>{
  setcounter(Counter + 1 )
}

const removeitem = () =>{
  if (Counter > 0 )
    setcounter (count => count - 1)
}

const resetitem = () =>{
  setcounter(0)
}

  return (
    <>
     <h2 className="text-center pt-5 fw-bold fs-1 me-5">Counter : { Counter}</h2>
     <div className="text-center mt-3 me-5  p-5">
     <button className="bg-success fs-5" onClick={additem}>Increment (+)</button>
     <button className="bg-primary fs-5" onClick={resetitem}>Reset(=)</button> 
     <button className="bg-danger fs-5" onClick={removeitem}>Decrement(-)</button> 
     </div>
    </>
    
  )
}
