import {useState} from 'react';

const MilesAhead = () =>{

    const[steps,setStep] = useState(0);

    function increment(){
        setStep(prev=>prev+1);
    }

    return(
        <>
            <p>Today you've taken {steps} steps!</p>
            <br/>
            <button onClick={increment}>I took another step </button>
        </>
    );
}

export default MilesAhead;

