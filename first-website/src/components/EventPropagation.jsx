//Event Propagation like
//=> Event Bubbling
//=> Event Capaturing

import "./EV.css"

export const EventPropagation=()=>{
    const handleGrandParent =()=>{
        console.log("Grandparent Clicked")
    }

    const handleParentClick =()=>{
        console.log("Parent Clicked")
    }

    const handleChildClick =(event)=>{
        console.log(event)
        console.log("Child Clicked");
        event.stopPropagation(); // preventing the event from bubbling up to the parent element

    }

    return(
        <>
        
                          
{/*             ====== Event Bubling =======
         <section className="main-div">
            <div className="g-div" onClick={handleGrandParent}>
                <div className="p-div" onClick={handleParentClick}>
                    <div className="c-div" onClick={handleChildClick}>
                        Click Me
                    </div>
                </div>
            </div>
        </section> */}


<section className="main-div">
            <div className="g-div" onClickCapture={handleGrandParent}>
                <div className="p-div" onClickCapture={handleParentClick}>
                    <div className="c-div" onClickCapture={handleChildClick}>
                        Click Me
                    </div>
                </div>
            </div>
        </section>   
        </>
    )
}