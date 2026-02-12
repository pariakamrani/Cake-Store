import React, { useState } from 'react'
import { MagnifyingGlassIcon, Bars3Icon, ShoppingCartIcon, BuildingLibraryIcon, BookOpenIcon, PhoneIcon, QuestionMarkCircleIcon, GiftIcon, ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export default function Navbar({ BasketItems }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [subMenuOpen, setSubMenuOpen] = useState(false)


    // وقتی روی سه نقطه کلیک شد
    const toggleMenu = () => setMenuOpen(prev => !prev)

    // وقتی روی محصولات کلیک شد
    const toggleSubMenu = () => {
        setSubMenuOpen(prev => !prev)

    }

    // وقتی روی لینک زیرمنو کلیک شد
    const closeAllMenus = () => {
        setMenuOpen(false)
        setSubMenuOpen(false)
    }
    const closeOption = () => {
        setSubMenuOpen(false)
    }
    const closeOptionsMenue = () => {
        setSubMenuOpen(false)
        setMenuOpen(false)
    }
    return (
        <section className="w-full NavbarTop shadow-xl">
            {/* هدر بالا */}
            <div className="flex justify-center items-center lg:gap-x-24 md:gap-x-20 sm:gap-x-14 gap-x-5 NavbarTop h-[10vh] px-4 lg:px-20">
                {/* دکمه سه نقطه موبایل */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="w-12 h-[5vh]  flex items-center justify-center">
                        <Bars3Icon className="w-8" />
                    </button>
                </div>

                {/* لوگو */}
                <div className="w-20 sm:w-32 h-[10vh] overflow-hidden logo">
                    <img src="./img/logo.webp" alt="Logo" className="w-full h-full" />
                </div>

                {/* جستجو */}
                <div className="flex items-center w-40 md:w-100 h-[4vh] bg-gray-100 rounded-2xl px-2">
                    <MagnifyingGlassIcon className="w-6 mx-4 text-black mr-2" />
                    <input type="search" placeholder="Search..." className="w-full rounded-2xl border-none outline-none" />
                </div>
                {/* سبد خرید */}
                {/* آیکون سبد خرید . شرطی شده که اگر سبد خرید پر بود منار آیکونش یه دایره صورتی نمایش داده بشه */}
                <Link className='relative' to={"/Basket"}>{BasketItems.length > 0 ? <div><ShoppingCartIcon className='w-6 text-black mx-4 mr-2' /> <span className="absolute -top-2 -right-2 w-5 h-5 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center">
                    {BasketItems.length}
                </span></div> : <ShoppingCartIcon className="w-6 mx-4 text-black mr-2" />} </Link>
            </div>

            {/* منوی موبایل */}
            {menuOpen && (
                <div className="md:hidden bg-pink-200 grid grid-cols-2 gap-x-2 gap-y-4 justify-items-center text-center fixed top-[10vh] right-0 w-70 h-auto p-4">
                    <a href="#" className="bg-pink-300 border border-pink-400 rounded-2xl  w-[100px] h-[50px] justify-items-center text-center  " onClick={closeAllMenus}>
                        <div className="  rounded-3xl w-[25px]  h-[25px] text-center  " > <BuildingLibraryIcon className="w-6  text-pink-400" /></div>
                        <p href="" className=" w-full h-1/2 text-center  " >صفحه اصلی</p>
                    </a>

                    {/* محصولات */}
                    <div>
                        <button onClick={toggleSubMenu} className=" rounded-2xl bg-pink-300 border border-pink-400 w-[100px] h-[50px] justify-items-center text-center   ">
                            <div className="  rounded-3xl w-[25px]  h-[25px] text-center  " > <GiftIcon className="w-6  text-pink-400 " /> </div>
                            <p href="" className=" w-full h-1/2 text-center  " > محصولات</p>
                        </button>
                        {subMenuOpen && (
                            <div className="md:hidden bg-pink-200 grid grid-cols-2 gap-x-2 gap-y-4 justify-items-center text-center fixed top-[10vh] right-0 w-70 h-auto p-4">
                                {/* منوی محصولات  */}
                                <button className='bg-pink-300 border border-pink-400 rounded-2xl  my-1 py-2 shadow-sm' onClick={closeOption}><ArrowRightIcon className="w-6  text-pink-400" /></button>
                                <button className='bg-pink-300 border border-pink-400 rounded-2xl  my-1 py-2 shadow-sm' onClick={closeOptionsMenue}><XMarkIcon className="w-6  text-pink-400" /></button>
                                <Link to="/Chokolate" className="bg-pink-300 border border-pink-400 rounded-2xl w-[100px] truncate  my-1 py-2 shadow-sm" onClick={closeAllMenus}> کیک شکلاتی</Link>
                                <Link to="/Birthday" className="bg-pink-300 border border-pink-400 rounded-2xl w-[100px] truncate  my-1 py-2 shadow-sm" onClick={closeAllMenus}>کیک تولد</Link>
                                <Link to="/Pie" className="bg-pink-300 border border-pink-400 rounded-2xl w-[100px] truncate  my-1 py-2 shadow-sm" onClick={closeAllMenus}>تارت میوه ای</Link>
                                <Link to="/Strawberry" className="bg-pink-300 border border-pink-400 rounded-2xl w-[100px] truncate  my-1 py-2 shadow-sm" onClick={closeAllMenus}> کیک توت فرنگی</Link>
                                <Link to="/Cupcake" className="bg-pink-300 border border-pink-400 rounded-2xl w-[100px] truncate  my-1 py-2 shadow-sm" onClick={closeAllMenus}> کاپ کیک  </Link>
                                <Link to="/Cookie" className="bg-pink-300 border border-pink-400 rounded-2xl w-[100px] truncate  my-1 py-2 shadow-sm" onClick={closeAllMenus}> کوکی  </Link>
                                <Link to="/Donut" className="bg-pink-300 border border-pink-400 rounded-2xl w-[100px] truncate  my-1 py-2 shadow-sm" onClick={closeAllMenus}> دونات  </Link>
                                <Link to="/Cheesecake" className="bg-pink-300 border border-pink-400 rounded-2xl w-[100px] truncate  my-1 py-2 shadow-sm" onClick={closeAllMenus}> چیز کیک  </Link>
                            </div>
                        )}
                    </div>

                    <Link to="/AboutUs" className="bg-pink-300 border border-pink-400 rounded-2xl  w-[100px] h-[50px] justify-items-center text-center  " onClick={closeAllMenus}>
                        <div className="  rounded-3xl w-[25px]  h-[25px] text-center  " > <BookOpenIcon className="w-6  text-pink-400 " /> </div>
                        <p className=" w-full h-1/2 text-center  " >درباره ما</p>
                    </Link>
                    <Link to="/Call" className="bg-pink-300 border border-pink-400 rounded-2xl  w-[100px] h-[50px] justify-items-center text-center  " onClick={closeAllMenus}>
                        <div className="  rounded-3xl w-[25px]  h-[25px] text-center  " ><PhoneIcon className="w-6  text-pink-400 " /> </div>
                        <p href="" className=" w-full h-1/2 text-center  " >تماس با ما</p>
                    </Link>
                    <Link to="/Guid" className="bg-pink-300 w-[100px] h-[50px] justify-items-center text-center border rounded-2xl border-pink-400  " onClick={closeAllMenus}>
                        <div className="  rounded-3xl w-[25px]  h-[25px] text-center  " ><QuestionMarkCircleIcon className="w-6  text-pink-400 " /> </div>
                        <p className="  w-full h-1/2 text-center  " > راهنای انتخاب </p>
                    </Link>
                </div>
            )}

            {/* منوی دسکتاپ */}
            <div className="hidden md:flex justify-center items-center NavbarTop py-2 mt-5 pb-5">
                <nav>
                    <ul className="flex gap-x-14">
                        <li><Link to={"/"}>صفحه اصلی</Link></li>
                        <li className='relative  group flex'><a href="#" className='    flex  justify-start '>محصولات</a>
                            {/* هاور زیر منو محصولات */}
                            <div className='bg-pink-50 grid grid-cols-3 z-100 justify-center items-center rounded-2xl border-pink-300 border-2  w-[600px] h-[19rem] absolute  top-10 tracking-normal   transition-all duration-400 invisible group-hover:visible  opacity-0 group-hover:opacity-500'>


                                <Link to="/Chokolate" className='inline-block  mx-3 mt-1 pb-5 pt-3 pr-4 hover:text-pink-500  transition duration-300 whitespace-nowrap' >کیک شکلاتی </Link>
                                <Link to="/Birthday" className='inline-block  mx-3 mt-1 pb-5 pt-3 pr-4 hover:text-pink-500  transition duration-300 whitespace-nowrap' href="">کیک تولد</Link>
                                <Link to={"/Pie"} className='inline-block  mx-3 mt-1 pb-5 pt-3 pr-4 hover:text-pink-500  transition duration-300 whitespace-nowrap' href="">تارت میوه ای</Link>
                                <Link to={"/Strawberry"} className='inline-block  mx-3 mt-1 pb-5 pt-3 pr-4 hover:text-pink-500  transition duration-300 whitespace-nowrap' href="">کیک توت فرنگی</Link>
                                <Link to={"/Cupcake"} className='inline-block  mx-3 mt-1 pb-5 pt-3 pr-4 hover:text-pink-500  transition duration-300 whitespace-nowrap' href=""> کاپ کیک</Link>
                                <Link to={"/Cookie"} className='inline-block  mx-3 mt-1 pb-5 pt-3 pr-4 hover:text-pink-500  transition duration-300 whitespace-nowrap' href="">کوکی</Link>
                                <Link to={"/Donut"} className='inline-block  mx-3 mt-1 pb-5 pt-3 pr-4 hover:text-pink-500  transition duration-300 whitespace-nowrap' href="">دونات </Link>
                                <Link to={"/Cheesecake"} className='inline-block  mx-3 mt-1 pb-5 pt-3 pr-4 hover:text-pink-500  transition duration-300 whitespace-nowrap' href=""> چیز کیک</Link>



                            </div>
                        </li>
                        <li><Link to="/AboutUs">درباره ما</Link></li>
                        <li><Link to="/Call">تماس</Link></li>
                        <li><Link to="/Guid">راهنمای انتخاب</Link></li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}
