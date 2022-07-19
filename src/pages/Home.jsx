import React, { useState, useEffect, createContext, useRef, useReducer } from 'react';
import About from './About';
import ComponentA from '../components/ComponentA';
import ParentComponent from '../components/ReactMemo/ParentComponent';
import CounterMemo from '../components/CounterMemo';

const FName = createContext();
const LName = createContext();

const initalCount = {count: 0};
const reducer = (state, action) =>{
    switch(action.type){
        case "next":
            return {count: state.count+1}
        case "previous":
            return {count: state.count-1}
        case 'reset':
            return {count: 0}
        default :
            throw new Error();
    }
}

const Home = () => {
    const [count, setCount] = useState(0);
    const [increment, setIncrement] = useState(0);
    const [singleUser, setSingleUser] = useState("Aarush");
    const newReference = useRef(0);
    const [state, dispatch] = useReducer(reducer, initalCount) 
    
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
            <div><h4>5. useReducer</h4>
                <p>Count - {state.count}</p>
                <button onClick={()=>dispatch({type:'next'})}>➕</button>
                <button onClick={()=>dispatch({type:'previous'})}>➖</button>
                <button onClick={()=>dispatch({type:'reset'})}>⚙</button>
            </div>
            <div><h4>6. React.memo & useCallback</h4>
               <ParentComponent/>
            </div>
            <div><h4>7. useMemo</h4>
             <CounterMemo/>
            </div>
        </>
    )
}
export default Home;
export { FName, LName };