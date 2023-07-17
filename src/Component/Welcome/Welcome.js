import React from 'react';
function Welcome({ numberTaskPending, numberTaskFinished, addTaskPage, finishTask, pendingTask }) {
  return (
    <div style={{ display: "flex", flexDirection: 'column', paddingTop: '160px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '40px' }}>
        <div style={{ color: (!addTaskPage&&!pendingTask&&!finishTask)?'black':(finishTask)?'red':'green' }}>
          <h1>{(!addTaskPage&&!finishTask&&!pendingTask)?'Welcome To Do App':(numberTaskPending===0&&pendingTask)?'No Pending Task...':(numberTaskFinished===0&&finishTask)&&'No Finished Task....'}</h1>
          <p style={{ textAlign: 'center', fontWeight: '600' }}>You Can Add Task</p>
        </div>
      </div>
    </div>
  )
}

export default Welcome
