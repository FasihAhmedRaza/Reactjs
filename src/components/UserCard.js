import React from 'react'

function UserCard({name , email , rollno}) {
  return (
   
    <div>
    <h1>{name}</h1>
    <h1>{email}</h1>
    <h1>{rollno}</h1>
</div>
  );
}

export default UserCard