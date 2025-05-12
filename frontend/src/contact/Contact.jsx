import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Contact = () => {
    const { 
        register,
        handleSubmit, 
        formState: { errors }
        } = useForm();
    
         const onSubmit = (data) => console.log(data);
    
  return (
    <>
      <div className='flex h-screen items-center justify-center  ' >
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <h1 className='font-bold text-lg'>Contact</h1>

  <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br/>
        <input type="text" placeholder="Enter Your Name" className='w-80 px-3 py-1 border rounded-md outline-none' 
        {...register("name", { required: true })} />
        <br/>
        {errors.name && (
        <span className='text-red-500'>
          This field is required
        </span>)}
    </div>

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

    <div className='mt-4 space-y-2'>
        <span>Message</span>
        <br/>
        <textarea type="textarea " placeholder="Type your message" className='w-80 h-20 px-3 py-1 border rounded-md outline-none' 
        {...register("name", { required: true })} />
        <br/>
        {errors.name && (
        <span className='text-red-500'>
          This field is required
        </span>)}
    </div>

  <button className="bg-primary text-white  rounded-md px-3 py-1 hover:bg-blue-900 duration-200 w-20">Submit</button>
</fieldset>
      </div>
      
    </>
  )
}

export default Contact
