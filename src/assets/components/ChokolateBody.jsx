import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
export default function ChokolateBody() {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
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

            <div className=' md:w-[600px] text-start px-5 text-2xl'><p>کیک های شکلاتی</p></div>


            <div className="slider-container  mt-8 relative">
                <Slider {...settings}>

                    <Link to={"/Chokolate"} className="w-75 px-2 bg-amber-50 py-2 rounded-2xl  ">
                        {/* image */}
                        <div className="h-52 lg:w-40   overflow-hidden rounded-xl">
                            <img
                                src={`${import.meta.env.BASE_URL}img/ch1.jpg`}
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>

                        {/* caption */}
                        <p className="mt-3 text-center  font-medium text-color mt-5 truncate">
                            کیک  سفید طلایی
                        </p>
                        <p className="mt-3 text-center  font-medium text-gray-700 mt-5 truncate">1000</p>
                        
                    </Link>

                    <Link to={"/Chokolate"} className="w-75 px-2 bg-amber-50 py-2 rounded-2xl">
                        {/* image */}
                        <div className="h-52 lg:w-40   overflow-hidden rounded-xl">
                            <img
                                src={`${import.meta.env.BASE_URL}img/ch2.jpg`}
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>

                        {/* caption */}
                        <p className="mt-3 text-center  font-medium text-color mt-5 truncate">
                            کیک دختر 
                        </p>
                        <p className="mt-3 text-center  font-medium text-gray-700 mt-5 truncate">11000</p>
                    </Link>

                    <Link to={"/Chokolate"} className="w-75 px-2 bg-amber-50 py-2 rounded-2xl">
                        {/* image */}
                        <div className="h-52 lg:w-40   overflow-hidden rounded-xl">
                            <img
                                src={`${import.meta.env.BASE_URL}img/ch3.jpg`}
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>

                        {/* caption */}
                        <p className="mt-3 text-center  font-medium text-color mt-5 truncate">
                            کیک صورتی عروسکی
                        </p>
                        <p className="mt-3 text-center  font-medium text-gray-700 mt-5 truncate">13200</p>
                    </Link>

                    <Link to={"/Chokolate"} className="w-75 px-2 bg-amber-50 py-2 rounded-2xl">
                        {/* image */}
                        <div className="h-52 lg:w-40   overflow-hidden rounded-xl">
                            <img
                                src={`${import.meta.env.BASE_URL}img/ch4.jpg`}
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>

                        {/* caption */}
                        <p className="mt-3 text-center  font-medium text-color mt-5 truncate">
                            کیک کل صورتی 
                        </p>
                        <p className="mt-3 text-center  font-medium text-gray-700 mt-5 truncate">18900</p>
                    </Link>

                    <Link to={"/Chokolate"} className="w-75 px-2 bg-amber-50 py-2 rounded-2xl">
                        {/* image */}
                        <div className="h-52 lg:w-40   overflow-hidden rounded-xl">
                            <img
                                src={`${import.meta.env.BASE_URL}img/ch5.jpg`}
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>

                        {/* caption */}
                        <p className="mt-3 text-center  font-medium text-color mt-5 truncate">
                            کیک کل عروس 
                        </p>
                        <p className="mt-3 text-center  font-medium text-gray-700 mt-5 truncate">17700</p>
                    </Link>

                    <Link to={"/Chokolate"} className="w-75 px-2 bg-amber-50 py-2 rounded-2xl">
                        {/* image */}
                        <div className="h-52 lg:w-40   overflow-hidden rounded-xl">
                            <img
                                src={`${import.meta.env.BASE_URL}img/ch6.jpg`}
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>

                        {/* caption */}
                        <p className="mt-3 text-center  font-medium text-color mt-5 truncate">
                            کیک طرح گیلاس 
                        </p>
                        <p className="mt-3 text-center  font-medium text-gray-700 mt-5 truncate">15600</p>
                    </Link>

                    <Link to={"/Chokolate"} className="w-75 px-2 bg-amber-50 py-2 rounded-2xl">
                        {/* image */}
                        <div className="h-52 lg:w-40   overflow-hidden rounded-xl">
                            <img
                                src={`${import.meta.env.BASE_URL}img/ch7.jpg`}
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>

                        {/* caption */}
                        <p className="mt-3 text-center  font-medium text-color mt-5 truncate">
                            کیک پاپیون پلنگی 
                        </p>
                        <p className="mt-3 text-center  font-medium text-gray-700 mt-5 truncate">15000</p>
                    </Link>

                    <Link to={"/Chokolate"} className="w-75 px-2 bg-amber-50 py-2 rounded-2xl">
                        {/* image */}
                        <div className="h-52 lg:w-40   overflow-hidden rounded-xl">
                            <img
                                src={`${import.meta.env.BASE_URL}img/ch8.jpg`}
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>

                        {/* caption */}
                        <p className="mt-3 text-center  font-medium text-color mt-5 truncate">
                            کیک خامه ای  
                        </p>
                        <p className="mt-3 text-center  font-medium text-gray-700 mt-5 truncate">15000</p>
                    </Link>

                    <Link to={"/Chokolate"} className="w-75 px-2 bg-amber-50 py-2 rounded-2xl">
                        {/* image */}
                        <div className="h-52 lg:w-40   overflow-hidden rounded-xl">
                            <img
                                src={`${import.meta.env.BASE_URL}img/ch9.jpg`}
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>

                        {/* caption */}
                        <p className="mt-3 text-center  font-medium text-color mt-5 truncate">
                            کیک گل آفتاب گردون زرد 
                        </p>
                        <p className="mt-3 text-center  font-medium text-gray-700 mt-5 truncate">12000</p>
                    </Link>

                    <Link to={"/Chokolate"} className="w-75 px-2 bg-amber-50 py-2 rounded-2xl">
                        {/* image */}
                        <div className="h-52 lg:w-40    overflow-hidden rounded-xl">
                            <img
                                src={`${import.meta.env.BASE_URL}img/ch10.jpg`}
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>

                        {/* caption */}
                        <p className="mt-3 text-center  font-medium text-color mt-5 truncate">
                            کیک  قلبی پاپیون دار
                        </p>
                        <p className="mt-3 text-center  font-medium text-gray-700 mt-5 truncate">18000</p>
                    </Link>

                    

                </Slider  >
            </div>
        </section>
    )
}

