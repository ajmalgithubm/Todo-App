import React from 'react'

function Welcome() {
  return (
    <div style={{display:"flex",flexDirection:'column',paddingTop:'160px'}}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '40px' }}>
              <div className=''>
                  <h1>Welcome To Do App</h1>
                  <p style={{ textAlign: 'center', fontWeight:'600' }}>You Can Add Task</p>
              </div>
          </div>
    </div>
  )
}

export default Welcome
