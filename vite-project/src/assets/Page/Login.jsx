import React, { useState } from 'react'
import axios from "axios"

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
     
    const handleLogin=async()=>{
         let obj={email,password}
        axios.post("http://localhost:1100/users/login",obj)
        .then(res=>console.log(res.data.token))
        .catch((err)=>console.log(err))
    }

  return (
    <div>
        <h2>login Page</h2>
        <input type='text' value={email} placeholder='email' onChange={(e)=>setEmail(e.target.value)} />
        <input type='password' value={password} placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login