import React, { useMemo, useState } from 'react'
import { Link ,Navigate } from 'react-router-dom';


const ExpensiveCalculation = (num) => {
  console.log("Calculating .. ");
  for(let i = 0 ; i < 10000000 ; i ++){
    num += 1;
  }
  return num; //2 -4 second



   //Api Call, Calculations
};


function Register() {
  const[count ,setCount] = useState(0);
  const[todos , setTodos] =useState([]);
 const calculation = useMemo( () => ExpensiveCalculation(count),[count]);
 
 //Memoization  - it is storing this inside a cache4 
 // todos - Array  - map = access every single element and then us it to display a compoent or a screen
  const increment =() => {
    setCount((c) => c + 1) ;
  } ;

  const addTodo = () => {
    setTodos((t) => [...t,"Todo Task"]);
  };
  return (
    
    <div>
       <div>
        <h2> My Todos</h2>
        {todos.map((todo , index) => {
          return <p key={index}> {todo}</p>;
        })}
        <button onClick={addTodo}> Add Todo</button>
       </div>
       <hr></hr>
       <div>
        Count : {count}
        <button onClick={increment}> + </button>
        <h2> Expensive Calculation</h2>
        {calculation}
        </div>
      {/* <button> Take me to User Page</button> */}
      <Link to="/UserList">Take me to user kist page</Link> 
      <Navigate to="/Contact" replace={true} />
    </div>
  );
}

export default Register















































///////       UseEffect  , useState

// import React, { useEffect, useState } from 'react'
// import "./Register.css";





// function Register() {

//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [age, setAge] = useState(10);


//   function handleRegister(e) {
//     e.preventDefault(); //donot Reload the screen on calling this function 
//     console.log("hello world ")
//   }
//   function increaseAge(e) {
//     e.preventDefault(); //donot Reload the screen on calling this function 
//     setAge(age + 1);
//   }

//   // let age =  20;
//   // let emailid = "fasih@gmail.com";

//   // console.log(email);
//   // console.log(password);

//   //use Effect it run when screen render
//   useEffect(() => {
//     console.log("age", age);
//   }, [age]); // dependency array - we provide this with state variables  , or any variables that are
//   // changing in nature , hit a re-render

//   return (

//     <form>
//       {age > 18 ? (
//       <div>
//         <h1>{age}</h1>
//         <input className='form-input'
//           type='email'
//           placeholder='Enter email'
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}

//         ></input>
//         <input className='form-input'
//           type='password'
//           placeholder='Enter Password'
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         ></input>

//         <button onClick={handleRegister}>Submit</button>
//       </div>
//       ) : ( 
//         <h1>Your are not  18 </h1>
//       )}
//         <button onClick={increaseAge}>Increase</button>

 
//     </form>
//   );
// }

// export default Register;