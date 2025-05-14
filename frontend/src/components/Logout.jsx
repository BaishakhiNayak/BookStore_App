import React from 'react'
import { useAuth } from '../context/AuthProvider';

const Logout = () => {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
        try{
            setAuthUser({
                ...authUser,
                user: null,
            });
            localStorage.removeItem("Users");
            alert("User Logout successfully");
            window.location.reload();
        } catch(err){
            console.log(err);
            alert("Error : "+ err.response.data.message);
        }
    }
  return (
    <div>
      <button className='px-3 py-2 bg-red-800 text-white rounded-md cursor-pointer'  
      onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
