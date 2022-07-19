import { useState, useEffect } from "react";
import axios from 'axios';

const FetchRequest = () => {
    const [advice, setAdvice] = useState('');
    const fetchApi = async() => {
        // axios.get('https://api.adviceslip.com/advice')
        // .then((response) => {
        //     console.log(response)
        //     const { advice } = response.data.slip;
        //     setAdvice(advice)
        // })
        // .catch((error) => {
        //     console.log(error)
        // })
        // fetch('https://api.adviceslip.com/advice')           
        //     .then((response) => {
        //         response.json();
        //     })
        //     .then(data => console.log("sdsd", data));
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