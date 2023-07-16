import React from 'react'
import Todo from '../Todo/Todo'
function Todos({taskList, setAddTaskPage}) {
  
  return (
    <div style={{padding:'10px'}}>
      {
      taskList.map((task,index) => {
        return(
          <Todo {...task} key={index} taskList = {taskList} setAddTaskPage ={setAddTaskPage}/>
        )
      })
    }
    </div>
  )
}

export default Todos
