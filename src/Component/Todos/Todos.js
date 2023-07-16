import React from 'react'
import Todo from '../Todo/Todo'
function Todos({taskList, setAddTaskPage, pendingTask, finishTask, numberTaskFinished, numberTaskPending, setNumberTaskFinished, setNumberTaskPending}) {
  
  return (
    <div style={{padding:'10px'}}>
      {
      taskList.map((task,index) => {
        return(
          <Todo {...task} key={index} taskList={taskList} setAddTaskPage={setAddTaskPage} pendingTask={pendingTask} finishTask={finishTask} setNumberTaskPending={setNumberTaskPending} numberTaskPending={numberTaskPending} numberTaskFinished={numberTaskFinished} setNumberTaskFinished={setNumberTaskFinished} />
        )
      })
    }
    </div>
  )
}

export default Todos
