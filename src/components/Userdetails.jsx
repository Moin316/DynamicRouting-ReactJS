import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Userdetails = () => {
    const {name}=useParams();
    const navigate = useNavigate();
    
  return (
    <div className=' w-[50%] m-auto mt-10'>
    <h1 className='text-5xl mb-2'>User Details</h1>
    <h1 className='text-3xl'>HI! {name}</h1>
    <button onClick={()=>navigate(-1)}  className='mt-5 p-3 bg-red-200 mb-2'>Go Back</button>
    </div> 
  )
}

export default Userdetails