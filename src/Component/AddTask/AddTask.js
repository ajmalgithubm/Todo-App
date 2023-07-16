import React, { useState } from 'react'

function AddTask({taskList, setTaskList}) {
  const [textAreaContent, setTextAreaContent] = useState('');
  const [id, setId] =useState(1);
  const addtaskInToList =(e) => {
    e.preventDefault()
    let currentArrayObject = [...taskList];
    let sampleObj = {taskName:textAreaContent, id:id, status:'incomplete'};
    currentArrayObject.push(sampleObj);
    setTaskList(currentArrayObject)
    setId(id+1);
  }
  return (
    <div style={{padding:"20px",display:'flex',justifyContent:'center'}}>
      <form>
        <textarea onChange={(e) => setTextAreaContent(e.target.value)} name="" id="" cols="30" rows="10" placeholder='please enter your task...' style={{padding:'10px',border:'3px solid black'}}></textarea>
        <br />
        <button onClick={addtaskInToList} style={{border:'2px solid black',padding:'5px',color:'black',fontWeight:'500'}}>Submit Task</button>
      </form>
    </div>
  )
}

export default AddTask
