import React from 'react';
const Title=()=>{
    console.log("Rendering Title")
    return(<>
    <h5>React.memo</h5>
    </>)
}
export default React.memo(Title);