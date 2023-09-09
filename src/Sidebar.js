import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar'> 
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="" />
            <Avatar className='sidebar__avatar'/>
            <h2>Shiva Khatri</h2>
            <h4>iamshivakhatri@gmail.com</h4>
        </div>  

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you? </p>
                <p className='sidebar__statNumber'> 2,543 </p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post </p>
                <p className='sidebar__statNumber'> 2,200 </p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recentl  </p>
        </div>
        

        
        
    </div>
  )
}

export default Sidebar