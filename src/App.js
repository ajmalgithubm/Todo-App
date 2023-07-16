import React, { useState } from 'react';
import Navbar from './Component/Navbar/Navbar';
import AddTask from './Component/AddTask/AddTask';
import Todos from './Component/Todos/Todos';

function App() {
  const [addTaskPage, setAddTaskPage] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [finishTask, setFinishTask] = useState(false);
  const [pendingTask, setPendingTask]= useState(false);
  const [numberTaskFinished, setNumberTaskFinished] = useState(0);
  const [numberTaskPending, setNumberTaskPending] = useState(0);
  return (
    <div>
      <Navbar addTaskPage={addTaskPage} setAddTaskPage={setAddTaskPage} setFinishTask={setFinishTask} setPendingTask={setPendingTask} setNumberTaskPending={setNumberTaskPending} numberTaskPending={numberTaskPending} numberTaskFinished={numberTaskFinished} setNumberTaskFinished={setNumberTaskFinished} />
      {
        (!addTaskPage&&!finishTask&&!pendingTask)&&<h1>Welcome To  ToDo App</h1>
      }
      {
        addTaskPage && (<AddTask setTaskList={setTasks} taskList={tasks} setNumberTaskPending={setNumberTaskPending} numberTaskPending={numberTaskPending}/>)
      }
      {
        finishTask && (<Todos taskList={tasks} setAddTaskPage={setTasks} finishTask={finishTask} pendingTask={pendingTask} setNumberTaskPending={setNumberTaskPending} numberTaskPending={numberTaskPending} numberTaskFinished={numberTaskFinished} setNumberTaskFinished={setNumberTaskFinished}/>)
      }
      {
        pendingTask && (<Todos taskList={tasks} setAddTaskPage={setTasks} finishTask={finishTask} pendingTask={pendingTask} setNumberTaskPending={setNumberTaskPending} numberTaskPending={numberTaskPending} numberTaskFinished={numberTaskFinished} setNumberTaskFinished={setNumberTaskFinished}/>)
      }
    
    </div>

  )
}

export default App
