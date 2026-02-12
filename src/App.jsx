import { HashRouter  as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css'
import Navbar from './assets/components/Navbar';
import Carousel from './assets/components/Carousel';
import FourPic from './assets/components/Fourpic';
import Halfcircle from './assets/components/Halfcircle';
import BirthdayBody from './assets/components/BirthdayBody';
import ChokolateBody from './assets/components/ChokolateBody';

import Circle from './assets/components/Circle';

import Footer from './assets/components/Footer';
import PieBody from './assets/components/PieBody';
import Chokolate from './assets/components/Chokolate';
import Birthday from './assets/components/Birthday';
import { useState } from 'react';
import Single from './assets/components/Single';
import Basket from './assets/components/Basket';
import Pie from './assets/components/Pie';
import Strawberry from './assets/components/Strawberry';
import Cupcake from './assets/components/Cupcake';
import Cookie from './assets/components/Cookie';
import Donut from './assets/components/Donut';
import Cheesecake from './assets/components/Cheesecake';
import AboutUs from './assets/components/AboutUs';
import Call from './assets/components/Call';
import Guid from './assets/components/Guid';



function App() {
  // این تابع افزودن محصول به سبد خریده 
  const [BasketItems, setBasketItems] = useState([]);
  const AddTocard=(mahsol)=>{
    const exsit=BasketItems.find((x)=>{
      return (x.id === mahsol.id && x.apiId === mahsol.apiId)
    })
    if(exsit){
      alert("محصول قبلا انتخاب شده.")
    }
    else{
      setBasketItems([...BasketItems,{...mahsol,quantity:1}]),
       alert("محصول به سبد خرید اضافه شد")
    }
  }


  // این تابع زیاد کردن تعداد محصول توی سبد خریده . + رو که میزنی زیاد میشه
   // تابع میاد اول آی دی و ای پی آی آیدی رو میگیره چون کحصولات با این دوتا بخش نسبت به همدیگه متمایز شدن . 
  // بعد میاد روش مپ میزنه و تو خط 47 میاد چک میکنه آیا آی دی محصول همونیه که دکمش زده شد ؟
  //  اگر همون بود بیا یه کپی ازش بگیر و تعدادش رو که میش کوانتیتی رو به علاوه یک کن
  const increaseQty = (id, apiId) => {
  setBasketItems(prev =>
    prev.map(item =>
      item.id === id && item.apiId === apiId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  )
}

  // این تابع کم کردن تعداد محصول توی سبد خریده . - رو که میزنی زیاد میشه
//  این مثل بالایی هبا این تفاوت که میاد میکه :
// math.max(1)
// ینی ماکسیمم یک باشه زیر 1 نشه عدد . و بعد میاد ازش کم میکنه عدد رو
  const decreaseQty = (id, apiId) => {
  setBasketItems(prev =>
    prev.map(item =>
      item.id === id && item.apiId === apiId
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    )
  )
}
  
  return (
    <>
      <Router>
        <Navbar BasketItems={BasketItems}/>
        <Routes>
          <Route path="/" element={<> <FourPic /> <Halfcircle /> <BirthdayBody /> <ChokolateBody /> <Circle /> <PieBody /> </>} />
          <Route path="/chokolate" element={<Chokolate AddTocard={AddTocard} BasketItems={BasketItems}/>} />
          <Route path="/birthday" element={<Birthday AddTocard={AddTocard}/>} />
          <Route path="/:apiId/:id" element={<Single AddTocard={AddTocard} BasketItems={BasketItems}/>} />
          <Route path="/basket" element={< Basket AddTocard={AddTocard} BasketItems={BasketItems} increaseQty={increaseQty} decreaseQty={decreaseQty}/>} />
          <Route path="/pie" element={<Pie AddTocard={AddTocard}/>} />
          <Route path="/strawberry" element={<Strawberry AddTocard={AddTocard}/>} />
          <Route path='/cupcake' element={<Cupcake AddTocard={AddTocard}/>}/>
          <Route path='/cookie' element={<Cookie AddTocard={AddTocard}/>}/>
          <Route path='/donut' element={<Donut AddTocard={AddTocard}/>}/>
          <Route path='/cheesecake' element={<Cheesecake AddTocard={AddTocard}/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/call' element={<Call/>}/>
          <Route path='/guid' element={<Guid/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
