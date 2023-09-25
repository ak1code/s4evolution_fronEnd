import {Routes,Route} from "react-router-dom";

import React from 'react'
import Home from "../Page/Home";
import Login from "../Page/login";
import Singup from "../Page/Singup";
import Post from "../Page/Post";

const AllRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/login" element={<Login/>}>Home</Route>
        <Route path="/singup" element={<Singup/>}>Home</Route>
        <Route path="/post" element={<Post/>}>Home</Route>
    </Routes>
  )
}

export default AllRoute