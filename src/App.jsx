import { useState } from 'react'
function App() {
  const [color, setColor] = useState("violet")
  const [name, setName] = useState("VIOLET")

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}>

        <div className='fixed flex flex-wrap 
          justify-center top-40 inset-x-0 px-2' > 
                <h1 className='text-7xl text-white' >{name}</h1>
            </div>

        <div className='fixed flex flex-wrap 
        justify-center bottom-12 inset-x-0 px-2' > 
              <div className='flex flex-wrap justify-center
                  gap-3 shadow-lg bg-white px-3 py-2
                  rounded-3xl'>
                    
                  <button onClick={()=>{setColor("violet"),setName("VIOLET")}} className='outline-none 
                  px-4 py-1 rounded-3xl text-white shadow-lg'
                  style={{backgroundColor:"violet"}}>Violet</button>

                  <button onClick={()=>{setColor("indigo"),setName("INDIGO")}} className='outline-none 
                  px-4 py-1 rounded-3xl text-white shadow-lg'
                  style={{backgroundColor:"indigo"}}>Indigo</button>

                  <button onClick={()=>{setColor("blue"),setName("BLUE")}} className='outline-none 
                  px-4 py-1 rounded-3xl text-white shadow-lg'
                  style={{backgroundColor:"blue"}}>Blue</button>

                  <button onClick={()=>{setColor("green"),setName("GREEN")}} className='outline-none 
                  px-4 py-1 rounded-3xl text-white shadow-lg'
                  style={{backgroundColor:"green"}}>Green</button>

                  <button onClick={()=>{setColor("yellow"),setName("YELLOW")}} className='outline-none 
                  px-4 py-1 rounded-3xl text-white shadow-lg'
                  style={{backgroundColor:"yellow"}}>Yellow</button>

                  <button onClick={()=>{setColor("orange"),setName("ORANGE")}} className='outline-none 
                  px-4 py-1 rounded-3xl text-white shadow-lg'
                  style={{backgroundColor:"orange"}}>Orange</button>

                  <button onClick={()=>{setColor("red"),setName("RED")}} className='outline-none 
                  px-4 py-1 rounded-3xl text-white shadow-lg'
                  style={{backgroundColor:"red"}}>Red</button>
              </div> 
          </div>
        </div>
        
    </>
  )
}

export default App
