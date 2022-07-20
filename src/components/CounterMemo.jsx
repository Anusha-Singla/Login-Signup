import { Button } from '@mui/material';
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
    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++ //to slow down
        return counterOne % 2 === 0
    }, [counterOne])
    //Tell react not to execute isEven when incTwo execute using useMemo
    return (<>
        {counterOne}<div>{counterOne}<span>{isEven ? "Even" : "Odd"}</span>
            <Button variant="outlined" onClick={incOne}>Count-1</Button></div><br />
        <div>{counterTwo}
            <Button variant='outlined' onClick={incTwo}>Count-2</Button></div>
        <p>this will also become slow, everytime the state updates, the component rerenders, when component re-render, isEven func called again. </p>
    </>)
}
export default CounterMemo;