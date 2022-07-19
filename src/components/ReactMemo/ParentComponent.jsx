import { useState, useCallback } from 'react'
import Button from "./Button";
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
        <Button handleClick={increasedAge}>Increased Age</Button>
        <Count text="Salary" count={salary}></Count>
        <Button handleClick={increasedSalary}>Increased Salary</Button>
    </>)
}
export default ParentComponent;