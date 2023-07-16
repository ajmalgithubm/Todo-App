import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div>
      <div className='d-flex justify-content-around align-items-center p-2 bg-info'>
        <div className='listItem'>
            <h1>ToDo List</h1>
        </div>
        <div className='listItem'>
            <h3>Completed Task</h3>
        </div>
        <div className='listItem'>
            <h3>Incompleted Task</h3>
        </div>
      </div>
    </div>
  )
}

export default Navbar