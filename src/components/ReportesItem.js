import React from 'react'

function ReportesItem({image, name}) {
  return (
    <div className='reportesItem' >
        <div style={{backgroundImage: `url(${ image })` }}></div>
        <h1> {name}</h1>
    </div>
  )
}

export default ReportesItem