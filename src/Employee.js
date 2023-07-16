import React from 'react'

function Employee({name, age, number}) {
    
  return (
    <div>
      <h1>{number}: Name :{name} age : {age}</h1>
    </div>
  )
}

export default Employee
