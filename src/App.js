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
        <AddTask setTaskList={setTasks} taskList={tasks} /> : (finishTask ? (<Todos taskList={tasks} finishTask={finishTask} setAddTaskPage={setAddTaskPage}/>) : (<Todos taskList={tasks} pendingTask={pendingTask} setAddTaskPage={setAddTaskPage}/>))
      }
    </div>

  )
}

export default App
