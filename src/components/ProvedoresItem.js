import React from 'react'

function ProvedoresItem({image, name}) {
  return (
    <div className='provedoresItem' >
        <div style={{backgroundImage: `url(${ image })` }}></div>
        <h1> {name}</h1>
    </div>
  )
}

export default ProvedoresItem