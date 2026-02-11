// import React, { useState } from 'react'
import { Link } from "react-router-dom";
export default function Basket({ BasketItems, increaseQty, decreaseQty }) {
    //    این کامپووننت سبد خرید میاد ای پی آی رو از آپ دات جی سیکش میگیره و روش مپ میزنه . 
    // increaseQty decreaseQty این دوتا تابع کم و زیاد شدن عدد تعداد محصوله که توی اپ تعریف شده و

    return (
        <>
            {BasketItems?.length === 0 && <div>سبد خرید خالی است.</div>}
            <div className=" flex  items-center justify-center mt-5">
                <div className="w-[768px] h-[2rem] rounded-4xl bg-pink-400 text-center pb-1">
                    <h2 className="text-2xl">سبد خرید</h2>
                </div>
            </div>
            {BasketItems.map((items) => {

                return (


                    <div className="max-w-4xl mx-auto px-4 py-10">


                        <div className="bg-white rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-10 ">

                            {/* تصویر */}
                            <div className="flex justify-center">
                                <img
                                    src={items.img}
                                    alt={items.name}
                                    className="w-72 h-72 object-cover rounded-2xl shadow-md"
                                />
                            </div>

                            {/* اطلاعات */}
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">
                                    {items.name}
                                </h1>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    {items.title}
                                </p>

                                <p className="mt-6 text-pink-600 font-bold text-xl">
                                    {items?.price?.toLocaleString()} تومان
                                </p>

                                <p className="mt-2 text-sm text-gray-500">
                                    وزن: {items.weight}
                                </p>

                                <div>
                                </div>
                                <div className='flex gap-x-6 mt-5 justify-center md:justify-end items-center pl-5'>
                                    <button onClick={() => increaseQty(items.id, items.apiId)} className='flex bg-pink-400 w-[35px] justify-center text-2xl pb-2 rounded-2xl'  ><p className='text-center'>+</p></button>
                                    <div className='flex' >{items.quantity}</div>
                                    <button onClick={() => decreaseQty(items.id, items.apiId)} className='flex bg-pink-400 w-[35px] justify-center text-2xl pb-2 rounded-2xl' ><p className='text-center'>-</p></button>
                                </div>

                                {/* <button onClick={() => AddTocard(items)} className="mt-8 w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl transition">
                                    افزودن به سبد خرید
                                </button> */}
                            </div>

                        </div>
                    </div>)

            })}

        </>)

}
