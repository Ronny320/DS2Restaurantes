import React from 'react'

function AdminItem({image, name}) {
  return (
    <div className='adminItem' >
        <div style={{backgroundImage: `url(${ image })` }}></div>
        <h1> {name}</h1>
    </div>
  )
}

export default AdminItem