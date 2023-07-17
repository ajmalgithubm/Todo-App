import React, { useState } from 'react';
import Navbar from './Component/Navbar/Navbar';
import AddTask from './Component/AddTask/AddTask';
import Todos from './Component/Todos/Todos';
import Welcome from './Component/Welcome/Welcome';

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
      
      {(!addTaskPage && !finishTask && !pendingTask) && (<Welcome addTaskPage={addTaskPage} finishTask={finishTask} pendingTask={pendingTask} numberTaskFinished={numberTaskFinished} numberTaskPending={numberTaskPending}/>)
      }
      {
        (numberTaskPending === 0 && pendingTask) && (<Welcome addTaskPage={addTaskPage} finishTask={finishTask} pendingTask={pendingTask} numberTaskFinished={numberTaskFinished} numberTaskPending={numberTaskPending} />)
      }
      {
        (numberTaskFinished === 0 && finishTask) && (<Welcome addTaskPage={addTaskPage} finishTask={finishTask} pendingTask={pendingTask} numberTaskFinished={numberTaskFinished} numberTaskPending={numberTaskPending} />)
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
