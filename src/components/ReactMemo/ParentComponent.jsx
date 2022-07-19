import { useState, useCallback } from 'react'
import Buttons from "./Buttons";
import Count from "./Count";
import Title from "./Title";

const ParentComponent = () => {
    const [age, setAge] = useState(22);
    const [salary, setSalary] = useState(50000)

    const increasedAge = useCallback(() => {
        setAge(age + 1);
    }, [age])
    const increasedSalary = useCallback(() => {
        setSalary(salary + 10000);
    }, [salary])
    return (<>
        <Title />
        <Count text="Age" count={age}></Count>
        <Buttons handleClick={increasedAge}>Increased Age</Buttons>
        <Count text="Salary" count={salary}></Count>
        <Buttons handleClick={increasedSalary}>Increased Salary</Buttons>
    </>)
}
export default ParentComponent;