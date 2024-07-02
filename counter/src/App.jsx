import React, { useState } from 'react'


function App(){

    const [counter, setCounter] = useState(0)

    const increaseCount = ()=>{
        if (counter == 10) return console.log("Counter cannot be greater than 10");

        setCounter(counter + 1)
        
    }
    const decreaseCount = ()=>{
        if (counter == 0) return console.log("Counter cannot be less than 0");
        setCounter(counter - 1)
        
    }

    return(
        <>
        <h2>{counter}</h2>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>

        <p>Counter: {counter}</p>
        </>
    )
}

export default App