import { useContext } from "react";
import { FName } from '../pages/Home';
import { LName } from "../pages/Home";

const ComponentD = () => {
    const fname = useContext(FName);
    const lname = useContext(LName)

    return (
        <>
         <h5>With useContext -  </h5>
           <p>I am from Component D - Hello from {fname} {lname}</p>
        </>
    )
}
export default ComponentD;