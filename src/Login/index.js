import React, { useState } from "react";//useState is a minor component in react
import './style.css';
import { Link } from "react-router-dom";
const Login=()=>{
    //username is the variable for holding the initial value,setUsername function for changing the state
    //current useState to an empty string
    
    const [username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const [successMessage, setSuccessMessage] = useState('');

    console.log(username);
    console.log(password);
    console.log(successMessage)
//code to handle submission
    const handleSubmit= async(e)=>
    //this code prevents when submitting for it to refresh everytime
    {e.preventDefault();
    const data={
        username:username,
        password:password,
    }
    console.log({data});
    try{
        const response= await fetch('https://dummyjson.com/auth/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
           })
           const result=await response.json()
           if (result.success) {
            setSuccessMessage('Login successful!');
          } else {
            setSuccessMessage('Login successfull.');
          } 
       
           console.log(result);
        }       
    catch (error){
        console.log(error.message)
    }
    
} 
    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Login form </h1>
                <input placeholder="Enter username" type="text"
                //to change the state of the value -callback function
                onChange={(e)=>setUsername(e.target.value)}
                
                />
                
                <br/>
                <br/>
                <input placeholder="Enter password" type="password"
                onChange={(e)=>setPassword(e.target.value)}
                
                />
                <br/>
                <br/>
                <button type="submit"> <Link to={"/products"}>Login</Link></button>
                {successMessage && <p>{successMessage}</p>}

            </form>
        </div>
    )
}
export default Login;