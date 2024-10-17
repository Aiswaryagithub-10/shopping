import React, { useState } from "react"; 

const Shopping=()=> {
const [mylist,setmylist] = useState(["Tomato","beans"])
const [item,setItem] = useState(" ")
const handleChange=(event)=>
{
    setItem(event.target.value)
}

const handleAdd = ()=>
{
    setmylist([...mylist,item])
    setItem(" ")
}
return(
    <>
    <input value={item} onChange={handleChange} placeholder="Enter your list"></input>
    <button onClick={handleAdd}>Add</button>
    <ul>
        {mylist.map(function(item){
            return<li>{item}</li>
        })}
    </ul>
    </>
)
}
export default Shopping