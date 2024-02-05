import React from 'react'

function Title ({name ,contactNum}) {
  return (

 <div>


     <h1 style={{fontFamily:'sans-serif',fontSize:"100" , color: "blue"}}>
        {/* {props.name} */}

      {name}
        </h1>
        
     <h1 style={{fontFamily:'sans-serif',fontSize:"100" , color: "Green"}}>
        {/* {props.name} */}

      {contactNum}
        </h1>

     </div>

  );
}

export default Title