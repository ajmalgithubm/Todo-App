import React, { useState } from 'react';
import Navbar from './Component/Navbar/Navbar';
import AddTask from './Component/AddTask/AddTask';
import Todos from './Component/Todos/Todos';

function App() {
  const [addTaskPage, setAddTaskPage] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [finishTask, setFinishTask] = useState(false);
  const [pendingTask, setPendingTask]= useState(false);
  return (
    <div>
      <Navbar addTaskPage={addTaskPage} setAddTaskPage={setAddTaskPage} setFinishTask={setFinishTask} setPendingTask={setPendingTask} />
      {
        (!addTaskPage&&!finishTask&&!pendingTask)&&<h1>Welcome To  ToDo App</h1>
      }
      {
        addTaskPage && (<AddTask setTaskList={setTasks} taskList={tasks} />)
      }
      {
        finishTask &&( <Todos taskList={tasks}  setAddTaskPage={setTasks} finishTask={finishTask} pendingTask={pendingTask}/>)
      }
      {
        pendingTask && (<Todos taskList={tasks} setAddTaskPage={setTasks} finishTask={finishTask} pendingTask={pendingTask} />)
      }
    
    </div>

  )
}

export default App
