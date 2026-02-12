import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
        
    };
    return (
        <div className="slider-container overflow-hidden px-3 bg-white  ">
            <Slider {...settings}>
                <div className='overflow-hidden rounded-2xl mx-5  h-80 '>
                    <img src="./img/c1.jpg" className='w-full object-cover h-full  ' alt="" />
                </div>
                <div className='overflow-hidden rounded-2xl mx-5  h-80 '>
                    <img src="./img/c2.jpg" className='w-full object-cover h-full  ' alt="" />
                </div>
                <div className='overflow-hidden rounded-2xl mx-5  h-80 '>
                    <img src="./img/c3.jpg" className='w-full object-cover h-full  ' alt="" />
                </div>
                <div className='overflow-hidden rounded-2xl mx-5  h-80 '>
                    <img src="./img/c4.jpg" className='w-full object-cover h-full  ' alt="" />
                </div>
                <div className='overflow-hidden rounded-2xl mx-5  h-80 '>
                    <img src="./img/c5.jpg" className='w-full object-cover h-full  ' alt="" />
                </div>
                <div className='overflow-hidden rounded-2xl mx-5  h-80 '>
                    <img src="./img/c6.jpg" className='w-full object-cover h-full  ' alt="" />
                </div>
            </Slider>
        </div>

    )
}
