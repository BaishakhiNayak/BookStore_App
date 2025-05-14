import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Login = () => {

  const { 
    register,
    handleSubmit, 
    formState: { errors },
    } = useForm();

     const onSubmit =  async (data) => {
      const userInfo= {
        
        email:data.email,
        password:data.password
      }
      await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);

        if(res.data){
          alert("User Login successfully");
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if(err.response){
          console.log(err);
        alert("Error : Please signup "+ err.response.data.message);
        }
        
      });
     };



  return (
    <div >
      <dialog id="my_modal_3" className="modal ">
  <div className="modal-box dark:bg-slate-800 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/"
       className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
       onClick={() => document.getElementById("my_modal_3").close()}>
        ✕
        </Link>

        
    
    <h3 className="font-bold text-lg">Login</h3>

{/* Email*/}

    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input type="email" 
        placeholder="Enter Your Email" 
        className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("email", { required: true })} 
        />
        <br/>
        {errors.email && 
        <span className='text-red-500 text-sm'>
          This field is required
        </span>}
    </div>
{/*password*/}
    <div> 
        <span>Password</span>
        <br/>
        <input type="password" 
        placeholder="Enter Your Password" 
        className='w-80 px-3 py-1 border rounded-md outline-none' 
        {...register("password", { required: true })}
        />
        <br/>
        {errors.password && 
        <span className='text-red-500'>
          This field is required
        </span>}
    </div>
{/* Button */ }
    <div className='flex justify-around mt-6'>
        <button className='bg-primary text-white  rounded-md px-3 py-1 hover:bg-blue-900 duration-200'>

          Login
        </button>
        <p>
          Not registered?{""}
            <Link to="/signup" className='underline text-primary cursor-pointer'>
                Signup
            </Link>{""}
        </p>
    </div>
    </form>
  </div>
</dialog>
</div>
  );
}

export default Login
