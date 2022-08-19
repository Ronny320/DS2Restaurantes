import React from 'react'

function SeguridadItem({image, name}) {
  return (
    <div className='seguridadItem' >
        <div style={{backgroundImage: `url(${ image })` }}></div>
        <h1> {name}</h1>
    </div>
  )
}

export default SeguridadItem