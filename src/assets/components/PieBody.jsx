import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
export default function PieBody() {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        centerPadding: "0px",
        variableWidth: true,
        arrows: true,
        responsive: [
    {
      breakpoint: 1024, // تبلت و پایین‌تر
      settings: {
        variableWidth: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 640, // موبایل
      settings: {
        variableWidth: false,
        slidesToShow: 2
      }
    }
  ]

    };
    return (
        <section className='mt-30  mx-auto w-[80%] justify-center jus items-center '>

            <div className=' md:w-[600px] text-start px-5 text-2xl'><p> تارت های میوه ای </p></div>


            <div className="slider-container  mt-8 relative">
                <Slider {...settings}>

                    <Link to={"/Pie"} className="w-75 px-2 bg-amber-50 py-2 rounded-2xl  ">
                        {/* image */}
                        <div className="h-52 lg:w-40   overflow-hidden rounded-xl">
                            <img
                                src="./img/p1.jpg"
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>

                        {/* caption */}
                        <p className="mt-3 text-center  font-medium text-color mt-5 truncate">
                               تارت میوه ای
                        </p>
                        <p className="mt-3 text-center  font-medium text-gray-700 mt-5 truncate">1000</p>
                        
                    </Link>

                    <Link to={"/Pie"} className="w-75 px-2 bg-amber-50 py-2 rounded-2xl">
                        {/* image */}
                        <div className="h-52 lg:w-40   overflow-hidden rounded-xl">
                            <img
                                src="./img/p2.jpg"
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>

                        {/* caption */}
                        <p className="mt-3 text-center  font-medium text-color mt-5 truncate">
                            تارت رزبری  
                        </p>
                        <p className="mt-3 text-center  font-medium text-gray-700 mt-5 truncate">11000</p>
                    </Link>

                    <Link to={"/Pie"} className="w-75 px-2 bg-amber-50 py-2 rounded-2xl">
                        {/* image */}
                        <div className="h-52 lg:w-40   overflow-hidden rounded-xl">
                            <img
                                src="./img/p3.jpg"
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>

                        {/* caption */}
                        <p className="mt-3 text-center  font-medium text-color mt-5 truncate">
                              تارت توت فرنگی
                        </p>
                        <p className="mt-3 text-center  font-medium text-gray-700 mt-5 truncate">13200</p>
                    </Link>

                    <Link to={"/Pie"} className="w-75 px-2 bg-amber-50 py-2 rounded-2xl">
                        {/* image */}
                        <div className="h-52 lg:w-40   overflow-hidden rounded-xl">
                            <img
                                src="./img/p4.jpg"
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>

                        {/* caption */}
                        <p className="mt-3 text-center  font-medium text-color mt-5 truncate">
                             تارت هلو  
                        </p>
                        <p className="mt-3 text-center  font-medium text-gray-700 mt-5 truncate">18900</p>
                    </Link>

                    <Link to={"/Pie"} className="w-75 px-2 bg-amber-50 py-2 rounded-2xl">
                        {/* image */}
                        <div className="h-52 lg:w-40   overflow-hidden rounded-xl">
                            <img
                                src="./img/p5.jpg"
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>

                        {/* caption */}
                        <p className="mt-3 text-center  font-medium text-color mt-5 truncate">
                            تارت خرمایی
                        </p>
                        <p className="mt-3 text-center  font-medium text-gray-700 mt-5 truncate">17700</p>
                    </Link>
                    

                    <Link to={"/Pie"} className="w-75 px-2 bg-amber-50 py-2 rounded-2xl">
                        {/* image */}
                        <div className="h-52 lg:w-40   overflow-hidden rounded-xl">
                            <img
                                src="./img/p6.jpg"
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>

                        {/* caption */}
                        <p className="mt-3 text-center  font-medium text-color mt-5 truncate">
                              تارت سایز بزرگ 
                        </p>
                        <p className="mt-3 text-center  font-medium text-gray-700 mt-5 truncate">15600</p>
                    </Link>

                    <Link to={"/Pie"} className="w-75 px-2 bg-amber-50 py-2 rounded-2xl">
                        {/* image */}
                        <div className="h-52 lg:w-40   overflow-hidden rounded-xl">
                            <img
                                src="./img/p7.jpg"
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>

                        {/* caption */}
                        <p className="mt-3 text-center  font-medium text-color mt-5 truncate">
                            تارت میکس بری   
                        </p>
                        <p className="mt-3 text-center  font-medium text-gray-700 mt-5 truncate">15000</p>
                    </Link>

                    <Link to={"/Pie"} className="w-75 px-2 bg-amber-50 py-2 rounded-2xl">
                        {/* image */}
                        <div className="h-52 lg:w-40   overflow-hidden rounded-xl">
                            <img
                                src="./img/p8.jpg"
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>

                        {/* caption */}
                        <p className="mt-3 text-center  font-medium text-color mt-5 truncate">
                              تارت سیب  
                        </p>
                        <p className="mt-3 text-center  font-medium text-gray-700 mt-5 truncate">15000</p>
                    </Link>

                    

                    <Link to={"/Pie"} className="w-75 px-2 bg-amber-50 py-2 rounded-2xl">
                        {/* image */}
                        <div className="h-52 lg:w-40    overflow-hidden rounded-xl">
                            <img
                                src="./img/p10.jpg"
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>

                        {/* caption */}
                        <p className="mt-3 text-center  font-medium text-color mt-5 truncate">
                              تارت آلبالو و توت فرمگی  
                        </p>
                        <p className="mt-3 text-center  font-medium text-gray-700 mt-5 truncate">18000</p>
                    </Link>
                    <Link to={"/Pie"} className="w-75 px-2 bg-amber-50 py-2 rounded-2xl">
                        {/* image */}
                        <div className="h-52 lg:w-40   overflow-hidden rounded-xl">
                            <img
                                src="./img/p11.jpg"
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>

                        {/* caption */}
                        <p className="mt-3 text-center  font-medium text-color mt-5 truncate">
                            تارت توت سیاه
                        </p>
                        <p className="mt-3 text-center  font-medium text-gray-700 mt-5 truncate">17700</p>
                    </Link>

                    

                </Slider  >
            </div>
        </section>
    )
}

