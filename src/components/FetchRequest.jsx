// import { useState } from "react";
import useFetch from "../customHooks/useFetch";
import CircularProgress from '@mui/material/CircularProgress'

const FetchRequest = () => {
    // const [advice, setAdvice] = useState('');
    // const fetchApi = async() => {
    //     const response = await fetch('https://api.adviceslip.com/advice');   
    //     const data = await response.json();
    //     setAdvice(data.slip.advice)
    // }
    // useEffect(() => {
    //     fetchApi();
    // }, [])

    const [data] = useFetch('https://api.adviceslip.com/advice')
    return (<>
        {data ? <>
            <div className="app" >
                <div className="card" >
                    <h1 className="heading">{data?.slip?.advice}</h1> {/*Random advice*/}
                    <button className="button">
                        <span>Give me Advice</span>
                    </button>
                </div >
            </div ></>
            : <CircularProgress />
        }

    </>)
}
export default FetchRequest;