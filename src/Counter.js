import React, { useEffect, useState } from 'react'

function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
 // console.log('Before useEffect Function..')
  useEffect(()=>{
    console.log('Mounting...');
    console.log('Count1 : '+count1);
    console.log('Count 2 :' + count2);
  },[count1, count2])
//console.log("After useEffect Function..")
  
  return (
    <div>
      <h1>This is a component {count1}</h1>
      <button onClick={() => setCount1(count1+1)}>increment</button>
      <h1>This is a component {count2}</h1>
      <button onClick={() => setCount2(count2 + 1)}>increment</button>
    </div>
  )
}

export default Counter
