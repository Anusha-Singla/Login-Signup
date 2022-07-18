import React from 'react';
import Contact from './Contact';
const About = (props) => {
    const { singleUser } = props
    return (
        <>
             <Contact singleUser={singleUser}/>
        </>
    )
}
export default About;