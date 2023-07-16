import React from 'react'

function Todo() {
    return (
        <div style={{ display: 'flex', flexDirection: "column", padding: '10px', backgroundColor:'#1f6918'}}>
            <div>
                <h2>Task Name</h2>
            </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap'}}>
                <div>
                    <p>Time Date</p>
                </div>
                <div>
                    <p>status</p>
                </div>
            </div>
        </div>
    )
}

export default Todo
