import React from 'react'
import Todo from '../Todo/Todo'
function Todos({taskList}) {
  
  return (
    <div style={{padding:'10px'}}>
      {
      tasks.map((task,index) => {
        return(
          <Todo task ={} key={index+1}/>
        )
      })
    }
    </div>
  )
}

export default Todos
