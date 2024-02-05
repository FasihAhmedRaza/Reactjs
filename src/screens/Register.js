import React from 'react'

function Register(
    
) {

    function handleRegister(){
        console.log("hello world ")
    }
  return (
    <form>
        <input type='email' placeholder='Enter email'></input>
         <button onClick={handleRegister}>Submit</button>
    </form>
  )
}

export default Register