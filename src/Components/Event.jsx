import React from 'react'

function Event() {
  return (
     const [count, setcount] = useState(10)
  const [name, setname] = useState("user")
    const [show,setshow]=useState(false)

 

  function increment() {
    setcount(count + 1)
    console.log(count);
  }
  function decriment(){
      setcount(count - 1)
  console.log(count);

  }
  function changename() {
    setname("abhishek")
  }
 
  function inputhandlar(e){
      // console.log(e.target.value)
    setname(e.target.value)

  }
return(
 <>

    
   {
     show?<div className='h-40 w-74 bg-gray-100'>
          <h3 className='text-gray-400'>Name: <span className='text-gray-900'>Abhishek</span></h3>
          <h3 className='text-gray-400'>email: <span className='text-gray-900'>abhishekgurjar5020@gmail.com</span></h3>
          <h3 className='text-gray-400'>email: <span className='text-gray-900'>abhishekgurjar5020@gmail.com</span></h3>
          <h3 className='text-gray-400'>email: <span className='text-gray-900'>abhishekgurjar5020@gmail.com</span></h3>
      </div>:
    <div>
      <input type="text" className='border'  onChange={(e) => {inputhandlar(e) }} />
      <h1>Hello ,{name}</h1>
    <div className='flex gap-6'>
  
   
      <h1>count {count}</h1>
      <button onClick={increment} className='border-[2px] py-4 px-4 bg-pink-300 rounded-2xl'>increment</button  >
       <button onClick={decriment} className='border-[2px] py-4 px-4 bg-pink-300 rounded-2xl'>decriment</button>
     <button onClick={changename} className='border rounded bg-green-600 px-4 py-1 text-white'>change name</button>
 {/* <Hoocs/> */}


    </div>
    </div>

 }
 // 14-08-2025 wala event class wali class ka code hai








  
  
  
  
  
  
  
  
  
  
  
  </>
 























 )
  )
}

export default Event;