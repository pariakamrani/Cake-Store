import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
export default function Donut({AddTocard}) {
    const[product,setProduct]=useState([])
            // fetch("/api/strawber
            useEffect(() => {
                fetch("/api/donut.json")
                  .then(res => res.json())
                  .then(data => setProduct(data))
                  .catch(error => console.log(error))
            
              }, [])
  return (
        <>
            <div className=''>
                <div className="max-w-7xl mx-auto px-4 py-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {product.map(item => (
                            <div
                                key={`${item.apiId}-${item.id}`}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col"
                            >

                                {/* تصویر */}
                                <div className="w-full flex justify-center">
                                    <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* اطلاعات */}
                                <div className="mt-4 text-center flex-1">
                                    <h3 className="text-lg font-bold text-gray-800">
                                        {item.name}
                                    </h3>

                                    {/* <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                        {item.title}
                      </p> */}

                                    <p className="mt-3 text-pink-600 font-bold">
                                        {item.price.toLocaleString()} تومان
                                    </p>
                                </div>

                                {/* دکمه‌ها */}
                                <div className="mt-4 flex gap-3">
                                    <button onClick={() => AddTocard(item)} className="flex-1 px-3 bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-xl text-sm transition">
                                        افزودن به سبد
                                    </button>

                                    <Link to={`/${item.apiId}/${item.id}`}><button className="flex-1 px-3 border border-pink-500 text-pink-500 hover:bg-pink-50 py-2 rounded-xl text-sm transition">
                                        مشاهده محصول
                                    </button></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
