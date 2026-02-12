import React from 'react'

export default function Circle() {
    return (
        <div className="cake-card rounded- justify-items-center 2xl:px-40 xl:px-25 lg:px-20  lg:gap-x-4  w-full mt-35  w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center justify-center items-center lg:gap-x-10 md:gap-x-20  gap-6  group relative w-[400px]">
            <div className="box rounded-full object-cover justify-items-center">
                <div className='relative  h-[8rem] w-32 overflow-hidden object-cover rounded-full  shadow-xl shadow-gray-900'>
                    <img src="./img/cir1.jpg" className="w-full h-full object-contain scale-180 pb-6" alt="" />
                </div>

                {/* Candle */}

            </div>

            <div className="box rounded-full object-cover justify-items-center">
                <div className='relative  h-[8rem] w-32 overflow-hidden object-cover rounded-full shadow-xl shadow-gray-900'>
                    <img src="./img/cir2.jpg" className="w-full h-full object-contain scale-220 pb-6" alt="" />
                </div>

                {/* Candle */}

            </div>

            <div className="box rounded-full object-cover justify-items-center">
                <div className='relative  h-[8rem] w-32 overflow-hidden object-cover rounded-full shadow-xl shadow-gray-900'>
                     <img src="./img/cir3.jpg" className="w-full h-full object-contain scale-160 pb-2" alt="" />
                </div>

                {/* Candle */}

            </div>

            <div className="box rounded-full object-cover justify-items-center">
                <div className='relative  h-[8rem] w-32 overflow-hidden object-cover rounded-full shadow-xl shadow-gray-900'>
                    <img src="./img/cir4.jpg" className="w-full h-full object-contain scale-110 pb-1" alt="" />
                </div>

                {/* Candle */}

            </div>
            <div className="box  object-cover justify-items-center">
                <div className='relative  h-[8rem] w-32 overflow-hidden object-cover rounded-full shadow-xl shadow-gray-900'>
                     <img src="./img/cir5.jpg" className="w-full h-full object-contain scale-135 pb-2" alt="" />
                </div>

                {/* Candle */}

            </div>
            <div className="box  object-cover justify-items-center object-cover  rounded-full ">
                <div className='relative  h-[8rem] w-32 overflow-hidden object-cover rounded-full shadow-xl shadow-gray-900'>
                     <img src="./img/cir6.jpg" className="w-full h-full object-contain scale-170 pb-1" alt="" />
                </div>
                

                {/* Candle */}

            </div>

            {/* <p className="mt-3 text-center text-lg">
                کیک تولد شکلاتی
            </p> */}
        </div>
    )
}
