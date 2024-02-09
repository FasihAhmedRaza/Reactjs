import React from 'react'
import "./Register.css";


function Register() {

    function handleRegister(e){
      e.preventDefault(); //donot Reload the screen on calling this function 
        console.log("hello world ")
    }
    
    let age =  20;
    let emailid = "fasih@gmail.com";


  return (

    <form>
      {/* Conditional statement */}
      {age > 18  && emailid === "fasih@gmail.com" ? (
        <div>
           <input className='form-input' type='email' placeholder='Enter email'></input>
           <input className='form-input' type='password' placeholder='Enter Password'></input>
         
         <button onClick={handleRegister}>Submit</button>
        </div>
      ) : (
        <h1>You are a small kid , come back value when you are 18</h1>
      )}
      
       
    </form>
  );   
}

export default Register;