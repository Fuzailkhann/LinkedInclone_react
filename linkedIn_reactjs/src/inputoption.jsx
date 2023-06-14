import React from 'react'
import "./inputoption.css"

function Inputoption({title , Color ,Icon}) {
  return (
    <div className='inputOption' >
        <Icon styel={{Color: Color}} /> 
         <h4> {title} </h4> 

      
    </div>
  )
}

export default Inputoption
