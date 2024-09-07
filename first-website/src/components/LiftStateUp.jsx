import { useState } from "react";
import "./EV.css";
export const LiftStateUp=()=>{
    const [inputValue, setInputValue] = useState('');
    return (
        <div>
            <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
            <DisplayComponent inputValue={inputValue}/>
        </div>
    )
}

const InputComponent=({inputValue,setInputValue})=>{
  return(
    <div>
      <input
      type="text"
      value={inputValue}
      placeholder="Enter your name"
      onChange={(e)=>setInputValue(e.target.value)}
      >
      </input>
    </div>
  )

}

const DisplayComponent=({inputValue})=>{
    return(
        
            <p>This is result :{inputValue}</p>

        
    )
}