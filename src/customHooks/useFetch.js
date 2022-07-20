import {useState, useEffect} from 'react';

const useFetch=(url)=>{
    const [data, setData] = useState(null);
//     const fetchApi = async() => {
//         const response = await fetch(url);   
//         const data = await response.json();
//         setData(data)
//     }
//     useEffect(() => {
//         fetchApi();
//     }, [data])
//     return [data];
// } 
useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};
export default useFetch;