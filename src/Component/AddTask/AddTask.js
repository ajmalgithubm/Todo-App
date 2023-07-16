import React from 'react'

function AddTask() {
  return (
    <div style={{padding:"20px",display:'flex',justifyContent:'center'}}>
      <form>
        <textarea name="" id="" cols="30" rows="10" placeholder='please enter your task...' style={{padding:'10px',border:'3px solid black'}}></textarea>
        <br />
        <button style={{border:'2px solid black',padding:'5px',color:'black',fontWeight:'500'}}>Submit Task</button>
      </form>
    </div>
  )
}

export default AddTask
