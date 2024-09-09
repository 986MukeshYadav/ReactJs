import "./ToggleSwitch.css"
import { useState } from "react"
import { IoIosSwitch } from "react-icons/io";
import { PiUserSwitchFill } from "react-icons/pi";

export const TogleSwitch=()=>{
    const [isON,SetIsOn]=useState(false)

    const handerClick=()=>{
        SetIsOn(!isON)
    }
  const btn =isON ? "on":"off"
  const background= {backgroundColor: isON ? "#4caf50" : "#f44336" }
 
    return(
        <>
        
        <h1 style={{ color: "#000", textAlign: "center" }}>
        Toggle Switch{" "}
        <IoIosSwitch style={{ color: "red", textAlign: "center" }} />
        <PiUserSwitchFill />
      </h1>
        <div className="toggle-switch" style={background}>
            <div className={`switch ${btn}`}>
            <span onClick={handerClick}>{btn}</span>
            </div>
        </div>
        </>
    )
}