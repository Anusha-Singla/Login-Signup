import React, { useState, useEffect, createContext, useRef, useReducer } from 'react';
import About from './About';
import ComponentA from '../components/ComponentA';

const FName = createContext();
const LName = createContext();

const Home = () => {
    const [count, setCount] = useState(0);
    const [increment, setIncrement] = useState(0);
    const [singleUser, setSingleUser] = useState("Aarush");
    const newReference = useRef(0);

    useEffect(() => {
        setIncrement(increment + 1)
    }, [])
    const handleCount = () => {
        newReference.current = newReference.current + 1;
        console.log("count", newReference.current)
    }
    return (
        <>
            <h2>React Hooks Implementation</h2>
            <div><h4>1. useState</h4>
                <p> {count} <button onClick={() => setCount(count + 1)}>Counter</button></p>
            </div>
            <div><h4>2. useEffect</h4>
                <p>{increment} times!</p>
            </div>
            <div>
                <h4>3. useContext - </h4>
                <h5>Without useContext</h5>
                <About singleUser={singleUser} /> We are getting the name of user by prop drilling,
                <h5>With createContext only-  </h5>
                <i>Creating Context, Providing Context & Consuming Context. This method is too complex and create callback hell</i>
                <FName.Provider value="Mr.">
                    <LName.Provider value="Aarush">
                        <ComponentA />
                    </LName.Provider>
                </FName.Provider>
            </div>
            <div><h4>4. useRef</h4>
                <p>Example of useRef with button click to check the count of button pressed.
                    #Check console
                    <button onClick={handleCount}>Count</button>
                </p>
            </div>
        </>
    )
}
export default Home;
export { FName, LName };