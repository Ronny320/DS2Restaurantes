import React from 'react'
import {Link} from "react-router-dom";
import enlace from '../pages/About';

function AyudaItem({image, name, enlace}) {
  
  return (
    <div className='ayudaItem' >
      
        <div style={{backgroundImage: `url(${ image })` }}></div>
        <h1> {name}</h1>  
        
    </div>



  )
}

export default AyudaItem