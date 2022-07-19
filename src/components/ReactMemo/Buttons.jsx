import { Button } from '@mui/material';
import React from 'react';

const Buttons = ({ handleClick, children }) => {
    console.log("Rendering", children)
    return (<>
        <Button variant="outlined" onClick={handleClick}>{children}</Button>
    </>)
}
export default React.memo(Buttons);