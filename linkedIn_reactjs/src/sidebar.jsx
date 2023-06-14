import { Avatar } from '@mui/material'
import React from 'react'
import "./sidebar.css"
import { useSelector } from 'react-redux'

function Sidebar() {
    const myUser = useSelector(state => state.linreducer.user)
    const recentItem = (topic) =>(
        <div className='sidebar_recentItem'>
            <span  className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className='sidebar'>
        <div className='sidebar_top' >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0dPQUXPrbDoOk1TClGqC-QZ3JrPl1b6N74lZ7Ea96&s  " alt="" />
            <Avatar className='sidebar_avtar'  >{myUser?.email[0]}</Avatar>
            <h2>{myUser?.name}</h2>
            <h4>{myUser?.email}</h4>

        </div>

        <div className='sidebar_stats' >
            <div className='sidebar_stat' >
                <p>who viewed you</p>
                <p className='sidebar_statNumber'>2,534</p>
              

            </div>
            <div className='sidebar_stat' >
                <p>viewes on post</p>
                <p className='sidebar_statNumber'>2,334</p>

            </div>

           


        </div>
        <div  className='sidebar_bottom'>
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programing")}
                {recentItem("javascript")}
                {recentItem("angular")}
        </div>
      
    </div>
  )
}

export default Sidebar
