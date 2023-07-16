import React from 'react'
import Todo from '../Todo/Todo'
function Todos({taskList, setAddTaskPage, pendingTask, finishTask}) {
  
  return (
    <div style={{padding:'10px'}}>
      {
      taskList.map((task,index) => {
        return(
          <Todo {...task} key={index} taskList = {taskList} setAddTaskPage ={setAddTaskPage} pendingTask={pendingTask} finishTask={finishTask}/>
        )
      })
    }
    </div>
  )
}

export default Todos
