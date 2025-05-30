import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Card from './Card';
import { useState, useEffect } from 'react';
const Freebook = () => {

  const [book, setBook]=useState([])

  useEffect(() => {
    const getBook= async ()=> {
      try{
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data.filter((data) => data.category === "Free" ));
      } catch(error){
        console.log(error)
      }
    };
    getBook();
  },[]);

    const filterData = book.filter((data) => data.category === "Free" );
    
    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <> 
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div>
        <h1 className='font-bold text-xl pb-2'>Free Offered Courses</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In deserunt perspiciatis est ducimus exercitationem laborum natus recusandae minus nobis corrupti.</p>
      </div>
    </div>

    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  '>
        <Slider {...settings}>
          {filterData.map((item) => ( 
            <Card item= {item} key= {item.id}/> 
            ))}
      </Slider>
      
    </div>
    </>
  )
}

export default Freebook
