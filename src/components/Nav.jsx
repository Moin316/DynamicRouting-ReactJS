import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <nav className="mt-10 flex justify-center gap-10">
        <NavLink style={(e)=>{
          return{
            color:e.isActive?"tomato":"",
          }
        }}
        to="/">Home</NavLink>

        <NavLink className={(e)=>{
          return[
            e.isActive?"text-red-500":""].join(" ")
          
        }} to="/user">User</NavLink>

        <NavLink to="/about">
        {
          (e)=>{
            return <span className={[e.isActive?"text-red-500":""]}>About</span> 
          }
        }
          
        </NavLink>
      </nav>
  )
}

export default Nav