import React from 'react';
import './Todo.css'

function Todo({taskName, status, id, taskList, setAddTaskPage, pendingTask, finishTask, numberTaskFinished, setNumberTaskFinished, numberTaskPending, setNumberTaskPending, date}) {
    const finishTaskFunction =(e,id) => {
        e.preventDefault()
        let driven = false;
        let currentList = [...taskList];
        for(let task of currentList){
            if(task['id'] ===id && task['status'] ==='incomplete'){
                task['status'] ='completed';
                driven = true
            }
        }
        if(driven){
            setNumberTaskFinished(numberTaskFinished+1);
            setNumberTaskPending(numberTaskPending-1);
            setAddTaskPage(currentList);
        }
        
    };
    const removeTask = (e, id)=> {
        e.preventDefault();
        let newTaskList = [];
        let currentList = [...taskList];
        for(let task of currentList){
            if(task['id'] ===id && task['status'] ==='incomplete'){
                setNumberTaskPending(numberTaskPending-1);
            }
            if(task['id'] ===id && task['status'] ==='completed'){
                setNumberTaskFinished(numberTaskFinished-1);
            }
            if(task['id'] !== id){
                newTaskList.push(task);
            }
        }
        setAddTaskPage(newTaskList);

    }
    return (
        <div>
            {
               (pendingTask && status==='incomplete') && (<div style={{ padding: '10px' }}>
                    <div style={{ display: 'flex', flexDirection: "column", padding: '10px', backgroundColor: '#1f6918', borderRadius: "10px", color: 'white', boxShadow: '0px 0px 10px 4px grey' }} className='bg-success'>
                        <div>
                            <button onClick={(e) => {removeTask(e,id)}} type="button" className="close bg-lg closeButton border-0" aria-label="Close" style={{ float: 'right', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white' }}>
                                <span aria-hidden="true" className='text-danger font-weight-bold' >&times;</span>
                            </button>
                        </div>
                        <div>
                            <h4 style={{ textAlign: 'center', textDecoration: 'crossline' }}>{taskName}</h4>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '50px', alignItems: 'center' }}>
                            <div>
                                <p style={{ fontSize: "16px", fontWeight: '400' }}>{date}</p>
                            </div>
                            <div>
                                <p style={{ fontSize: "16px", fontWeight: '400' }}>Pending ......</p>
                            </div>
                            <div>
                                <button className='btn btn-info btn-sm' onClick={(e) => finishTaskFunction(e, id)}>Finish</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            {
                (finishTask && status === 'completed') && (<div style={{ padding: '10px' }}>
                    <div style={{ display: 'flex', flexDirection: "column", padding: '10px', backgroundColor: '#1f6918', borderRadius: "10px", color: 'white', boxShadow: '0px 0px 10px 4px grey' }} className='bg-danger'>
                        <div>
                            <button onClick={(e) => removeTask(e,id)} type="button" className="close bg-lg closeButton border-0" aria-label="Close" style={{ float: 'right', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white' }}>
                                <span aria-hidden="true" className='text-danger font-weight-bold' >&times;</span>
                            </button>
                        </div>
                        <div>
                            <h4 style={{ textAlign: 'center', textDecoration: 'crossline' }}>{taskName}</h4>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '50px', alignItems: 'center' }}>
                            <div>
                                <p style={{ fontSize: "16px", fontWeight: '400' }}>{date}</p>
                            </div>
                            <div>
                                <p style={{ fontSize: "16px", fontWeight: '400' }}>Completed...</p>
                            </div>
                            <div>
                                <button className='btn btn-danger btn-sm' onClick={(e) => finishTaskFunction(e, id)}>Finished</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Todo
