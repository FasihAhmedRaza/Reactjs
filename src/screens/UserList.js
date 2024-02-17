import React from 'react'
import UserCard from '../components/UserCard';
import data from '../utilis/data';


//best function
function UserList() {
  
  return (
    <div>
        {data.map(({name , email , rollno}) => (
           
               <UserCard name={name}  email={email} rollno={rollno} />
            ))}

            USer lis
    </div>
  );
}

export default UserList