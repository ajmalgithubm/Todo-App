import React from 'react'
import './Navbar.css'
function Navbar({setAddTaskPage, setFinishTask, setPendingTask, numberTaskFinished, numberTaskPending}) {
    return (
        <div>
            <div className='d-flex justify-content-around align-items-center p-2 bg-info flex-wrap'>
                <div className='listItem' >
                    <h1>ToDo List</h1>
                </div>
                <div className='listItem' style={{ cursor: 'pointer' }} onClick={()=> {
                    setAddTaskPage(true);
                    setFinishTask(false);
                    setPendingTask(false);
                }}>
                    <h3>Add Task</h3>
                </div>
                <div className='listItem' style={{cursor:'pointer'}} onClick={() =>{
                    setAddTaskPage(false);
                    setPendingTask(true);
                    setFinishTask(false);
                } }>
                    <h3>Pending Task <span class="badge badge-dark bg-success">{numberTaskPending}</span></h3>
                </div>
                <div className='listItem' style={{ cursor: 'pointer' }} onClick={() => {
                    setAddTaskPage(false);
                    setFinishTask(true);
                    setPendingTask(false);
                }}>
                    <h3>Finished Task <span class="badge badge-primary bg-danger">{numberTaskFinished}</span></h3>
                </div>
            </div>
        </div>
    )
}

export default Navbar
