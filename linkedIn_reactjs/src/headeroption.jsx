
import React from 'react'
import "./headeroption.css"
import { Avatar } from '@mui/material'


function Headeroption({avator , title  , Icon , onClick}) {
  return (
    <div onClick ={onClick} className='headeroption'>
       {Icon && <Icon className="headeroption_icon" />}
       {/* { avator && <Avatar src={avator} className="heeaderoption_pic"/>} */}
       {avator &&<Avatar src={avator} className="heeaderoption_pic">{avator}</Avatar>}
        <h3 className='headeroption_title'> {title} </h3>

      
    </div>
  )
}

export default Headeroption
