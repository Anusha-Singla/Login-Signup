import { useContext } from "react";
import { FName } from '../pages/Home';

const ComponentD = () => {
    const fname = useContext(FName)
    return (
        <>
         <h5>With useContext -  </h5>
           <p>I am from Component D - Hello from {fname}</p>
        </>
    )
}
export default ComponentD;