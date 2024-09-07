import { useState } from "react";
import "./EV.css"

// const users=[
//     {name:"Mukesh" , age:25},
//     {name:"Ranjan" , age:22},
//     {name:"Priya" , age:23},
//     {name:"Suresh" , age:24},
//     {name:"Nilesh" , age:26}
// ];

export const DerivedState=()=>{
const [user,setUsers]=useState([
    {name:"Mukesh" , age:25},
    {name:"Ranjan" , age:22},
    {name:"Priya" , age:23},
    {name:"Suresh" , age:24},
    {name:"Nilesh" , age:26}
]);

const userCount = user.length;
const averageCount = (user.reduce((acc,curr)=>acc + curr.age,0)/userCount)

    return(
        <div className="main-div">
        <h1>Users List</h1>
        <ul>
            {
                user.map((item,index)=>(
                    <li key={index}>
                        {item.name} - {item.age} years old.
                        
                        </li>
                ))
            }
            <p>Total Numbers Of Users: {userCount}</p>
            <p>Average of Age: {averageCount}</p>
        </ul>
        </div>
    )
}

