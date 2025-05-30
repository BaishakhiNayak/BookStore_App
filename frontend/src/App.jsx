import React from 'react';
import Home from './home/Home';
import Courses from './courses/Courses';
import Signup from "./components/Signup";
import {Navigate, Route, Routes} from "react-router-dom";
import Login from './components/Login';
import Contact from './contact/Contact';
import About from './about/About';
import { useAuth } from './context/AuthProvider';

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      
      </Routes>
    </div>
     
    </>
  )
}

export default App
