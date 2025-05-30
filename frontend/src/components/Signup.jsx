import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Signup = () => {

  const { 
    register,
    handleSubmit,  
    formState: { errors }
    } = useForm();

     const onSubmit =async (data) => {
      const userInfo= {
        fullname:data.fullname,
        email:data.email,
        password:data.password
      }
      await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);

        if(res.data){
          alert("User Signed successfully");
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if(err.response){
          console.log(err);
        alert("Error : "+ err.response.data.message);
        }
        
      });
     };

  return (
    <>
     
     <div className='flex h-screen items-center justify-center  '>
        <div  className=' border-[px] shadow-2xl p-5 rounded-md ' >
        <div className=''>
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link  to="/" 
       className="btn btn-sm btn-circle btn-ghost absolute right-0 top-2 ">
       ✕
      </Link>
    
    <h3 className="font-bold text-lg">Signup</h3>

    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br/>
        <input type="text" placeholder="Enter Your Name" className='w-80 px-3 py-1 border rounded-md outline-none' 
        {...register("fullname", { required: true })} />
        <br/>
        {errors.name && (
        <span className='text-red-500'>
          This field is required
        </span>)}
    </div>
{/* Email */}
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input type="email" placeholder="Enter Your Email" className='w-80 px-3 py-1 border rounded-md outline-none' 
        {...register("email", { required: true })} />
        <br/>
        {errors.email && (
        <span className='text-red-500'>
          This field is required
        </span>)}
    </div>
{/*password*/}
    <div className='mt-4 space-y-2'> 
        <span>Password</span>
        <br/>
        <input type="password" placeholder="Enter Your Password"
         className='w-80 px-3 py-1 border rounded-md outline-none' 
        {...register("password", { required: true })} />
        <br/>
        {errors.password && (
        <span className='text-red-500'>
          This field is required
        </span>
      )}
    </div>
{/* Button */ }
    <div className='flex justify-around mt-4'>
        <button className='bg-primary text-white  rounded-md px-3 py-1 hover:bg-blue-900 duration-200'>
          Signup
        </button>
        <p className='text-xl'>
          Have Account? {""}
            <button  className='underline text-primary cursor-pointer'
            onClick={() => 
                document.getElementById("my_modal_3").showModal()
            }>
                Login
            </button>{""}
           <Login/>
           
                      
        </p>

    </div>
    </form>
  </div>
</div>
</div>
    
    </>
  )
}

export default Signup
