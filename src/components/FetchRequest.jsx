import { useState, useEffect } from "react";
import axios from 'axios';

const FetchRequest = () => {
    const [advice, setAdvice] = useState('');
    const fetchApi = async() => {
        const response = await fetch('https://api.adviceslip.com/advice');   
        const data = await response.json();
        setAdvice(data.slip.advice)
    }
    useEffect(() => {
        fetchApi();
    }, [])

    return (
        <div className="app">
            <div className="card">
                <h1 className="heading">{advice}</h1>
                <button className="button" onClick={fetchApi}>
                    <span>Give me Advice</span>
                </button>
            </div>
        </div>
    )
}
export default FetchRequest;