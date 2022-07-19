import React, { useState, useMemo } from 'react';
const CounterMemo = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);
    const incOne = () => {
        setCounterOne(counterOne + 1);
    }
    const incTwo = () => {
        setCounterTwo(counterTwo + 2);
    }
    const isEven = useMemo(()=>{
        let i=0;
        while(i<2000000000) i++ //to slow down
        return counterOne %2 === 0
    }, [counterOne])
    //Tell react not to execute isEven when incTwo execute using useMemo
    return (<div>
        <div>{counterOne}<span>{isEven? "Even" : "Odd"}</span>
        <button onClick={incOne}>Count-1</button></div>
        <div>{counterTwo} 
        <button onClick={incTwo}>Count-2</button></div> 
        <p>this will also become slow, everytime the state updates, the component rerenders, when component re-render, isEven func called again. </p>
    </div>)
}
export default CounterMemo;