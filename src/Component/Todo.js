import React from 'react'

function Todo() {
    return (
        <div style={{padding:'10px'}}>
            <div style={{ display: 'flex', flexDirection: "column", padding: '10px', backgroundColor: '#1f6918',borderRadius:"10px",color:'white',boxShadow:'0px 0px 10px 4px grey'}} className='bg-success'>
                <div>
                    <h2 style={{textAlign:'center'}}>Task Name</h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                    <div>
                        <p>created at Time Date</p>
                    </div>
                    <div>
                        <p>status</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo
