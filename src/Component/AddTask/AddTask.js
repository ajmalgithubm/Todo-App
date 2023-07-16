import React, { useState } from 'react'

function AddTask({taskList, setTaskList, numberTaskPending, setNumberTaskPending}) {
  const [textAreaContent, setTextAreaContent] = useState('');
  const [id, setId] =useState(1);
  const addtaskInToList =(e) => {
    e.preventDefault()
    let currentArrayObject = [...taskList];
    let date = new Date().toLocaleTimeString()
    let sampleObj = {taskName:textAreaContent, id:id, status:'incomplete', date:date};
    if(sampleObj.taskName !== ''){
        currentArrayObject.push(sampleObj);
        setTaskList(currentArrayObject)
        setId(id + 1);
        //alert("One Task Added...");
        let textArea = document.getElementById('textArea');
        textArea.value = '';
        textArea.focus();
        setNumberTaskPending(numberTaskPending+1);

    }else{
        alert('Please Enter Task...')
    }
    
  }
  return (
    <div style={{padding:"20px",display:'flex',justifyContent:'center'}}>
      <form>
        <textarea id='textArea' onChange={(e) => setTextAreaContent(e.target.value)} name=""  cols="30" rows="10" placeholder='please enter your task...' style={{padding:'10px',border:'3px solid black'}}></textarea>
        <br />
        <button onClick={addtaskInToList} style={{border:'2px solid black',padding:'5px',color:'black',fontWeight:'500'}}>Submit Task</button>
      </form>
    </div>
  )
}

export default AddTask
