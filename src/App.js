import React, { useState } from 'react';
import Navbar from './Component/Navbar/Navbar';
import AddTask from './Component/AddTask/AddTask';
import Todos from './Component/Todos/Todos';
function App() {
  const [addTaskPage, setAddTaskPage] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [finishTask, setFinishTask] = useState(false);
  const [pendingTask, setPendingTask]= useState(false);
  return (
    <div>
      <Navbar addTaskPage={addTaskPage} setAddTaskPage={setAddTaskPage} setFinishTask={setFinishTask} setPendingTask={setPendingTask} />
      { addTaskPage?
        <AddTask setTaskList={setTasks} taskList={tasks}/>:<Todos taskList={tasks}/>
      }
    </div>

  )
}

export default App
