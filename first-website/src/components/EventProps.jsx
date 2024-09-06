//Event pass in props

import "./EV.css"
export const EventProps=()=>{
    const handlerSubmit=(user)=>{
        console.log(`Welcome ${user}`)
    }
    const handerClick=()=>{
        alert("hey ! Mouse Hover")
    }
    return(
        <>
        <Welcome onButtonClick={()=>handlerSubmit("Mukesh")} onMouseEnter={handerClick} />
        </>
    )
}

const Welcome=(props)=>{
    const {onButtonClick , onMouseEnter}=props
    const Greating=()=>{
        console.log("Welcome users")
        props.onButtonClick()
    }
    return(
        <>
        <button onClick={onButtonClick}>Click Me</button>
        <button onMouseEnter={onMouseEnter}>Click Me</button>
        <button onClick={Greating}>Greating</button>
        </>
    )
}