import {useState} from 'react';

const StateTask = () =>{

    const[userName,setUserName] = useState("");
    const[password,setPassword] = useState("");

    const printValues=(e)=>{
        e.preventDefault();
        console.log(userName,password);
    }

    return(
        <>
            <form onSubmit= {printValues}>
                <label> User Name </label>
                <input 
                id="userName"
                type="text"
                name="userName"
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
                
                />

                <label> Password </label>
                <input 
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default StateTask;

