import { FName, LName } from '../pages/Home';

const ComponentC = () => {
    return (
        <>
            <FName.Consumer>
                {(fname) => {
                    return (
                        <div>
                            <LName.Consumer>
                                {(lname)=>{
                                    return(<p>I am from Component C - Hello from {fname} {lname}</p>)
                                }}
                            </LName.Consumer>
                        </div>
                    )
                }}
            </FName.Consumer>
        </>
    )
}
export default ComponentC;