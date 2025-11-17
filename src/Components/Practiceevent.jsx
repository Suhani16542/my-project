
import React, { useState } from 'react'

function Practiceevent() {

//    var count=3;
 const [count,setcount]=useState(10);
 const [number,setnumber]=useState(0);

  function handleincrement(){
     setcount(count+number)
    // alert("increment clicked")
    //    count=count+1
    //    console.log(count);
  }

  function handledecremet(a){
    setcount(count-number)
    // alert(`handledecrement $(a)`)
    // count=count-1
    // console.log(count)

}
function handlechange(e){
  setnumber(parseInt(e.target.value))
  // console.log(e.target.value)
}
 
  return (
    <>
    <h1>hellow user</h1>
    <h1>count value is:{count}</h1>

    <input type="text" onChange={handlechange} />

    <button className='border' onClick={handleincrement}>increment</button>
    <button className='border' onClick={()=>{handledecremet(10)}}>decrement</button>
    
    
    </>
  )
}

export default Practiceevent;
