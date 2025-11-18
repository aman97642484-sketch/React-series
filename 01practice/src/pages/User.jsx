import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function User() {
    const [user, setUser]=useState([]);

    useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      console.log("API DATA:", data);  // IMP TEST
      setUser(data);
    });
}, []);

  return (
    <div style={{paddingTop:"30px"}}>
    <h2>User Api Demo</h2>
    <ul>
        {user.map((u) => (
        <li key={u.id}>{u.name}</li>
        ))}
    </ul>
    </div>
    
  )
}

export default User