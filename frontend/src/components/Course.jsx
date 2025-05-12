import React from 'react'
import Card from "../components/Card"
import list from "../../public/list.json";
import {Link} from "react-router-dom"
const Course = () => {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl font-bold md:text-4xl'>We're delighted to have you {""} 
            <span className='text-primary'>Here! :)</span>
          </h1>
          <p className='mt-12'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores pariatur accusantium voluptatem voluptatibus provident obcaecati iusto similique, consequatur unde aliquam sunt eos nulla modi rerum et excepturi expedita aperiam asperiores laudantium placeat praesentium aliquid dolores odit! Consequatur earum minima delectus!
          </p>
          <Link to="/">
            <button className='mt-6 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-900 duration-300'>Back</button>
          </Link>
        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 '>
            {
              list.map((item)=>
                (<Card key={item.id} item={item}/>))
            }
        </div>

      </div>
    </>
  )
}

export default Course
