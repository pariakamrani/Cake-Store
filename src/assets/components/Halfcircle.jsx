import React from 'react'
import { Link } from "react-router-dom";
export default function Halfcircle() {
    return (
        <div className=" flex flex-wrap justify-center gap-x-5 gap-y-5 md:gap-x-20  p-4 mt-20 sm:mt-40">

            <Link to={"/Chokolate"} className="w-[40%] md:w-[20%] lg:w-[20%] xl:w-[10%] ">
                <div className="shadow-xl/30 w-full h-[16rem] rounded-t-full overflow-hidden object-cover"><img className='w-full h-full' src="./img/ch10.jpg" alt="" /></div>
                <p className="text-center mt-4 shadow-lg shadow-gray-400 pb-4">کیک شکلاتی</p>
            </Link>

            <Link to={"/Strawberry"} className="w-[40%] md:w-[20%] lg:w-[20%] xl:w-[10%] h-[20rem] ">
                <div className="shadow-xl/30 w-full h-[16rem] rounded-t-full  overflow-hidden object-cover"><img className='w-full h-full' src="./img/s2.jpg" alt="" /></div>
                <p className="text-center mt-4 shadow-lg shadow-gray-400 pb-4 truncate">کیک توت فر نگی</p>
            </Link>

            <Link to={"/Cupcake"} className="w-[40%] md:w-[20%] lg:w-[20%] xl:w-[10%] h-[20rem] ">
                <div className="shadow-xl/30 w-full h-[16rem] rounded-t-full  overflow-hidden object-cover"><img className='w-full h-full' src="./img/cup1.jpg" alt="" /></div>
                <p className="text-center mt-4 shadow-lg shadow-gray-400 pb-4 ">کاپ کیک</p>
            </Link>

            <Link to={"/Cookie"} className="w-[40%] md:w-[20%] lg:w-[20%] xl:w-[10%] h-[20rem] ">
                <div className="shadow-xl/30 w-full h-[16rem] rounded-t-full  overflow-hidden object-cover"><img className='w-full h-full' src="./img/cookie1.jpg" alt="" /></div>
                <p className="text-center mt-4 shadow-lg shadow-gray-400 pb-4 ">کوکی</p>
            </Link>

            <Link to={"/Donut"} className="w-[40%] md:w-[20%] lg:w-[20%] xl:w-[10%] h-[20rem] ">
                <div className="shadow-xl/30 w-full h-[16rem] rounded-t-full  overflow-hidden object-cover"><img className='w-full h-full' src="./img/d1.jpg" alt="" /></div>
                <p className="text-center mt-4 shadow-lg shadow-gray-400 pb-4">دونات</p>
            </Link>
            <Link to={"/Cheesecake"} className="w-[40%] md:w-[20%] lg:w-[20%] xl:w-[10%] h-[20rem]0">
                <div className="shadow-xl/30 w-full h-[16rem] rounded-t-full  overflow-hidden object-cover"><img className='w-full h-full' src="./img/chees1.jpg" alt="" /></div>
                <p className="text-center mt-4 shadow-lg shadow-gray-400 pb-4">چیز کیک</p>
            </Link>
            


        </div>
    )
}
