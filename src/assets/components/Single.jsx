import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Single({ AddTocard, BasketItems }) {

  



// این میاد اول با استفاده از (یوز پارامز)  از (یو آر ال)/ (آیدی) و (ای پی آی آیدی) محصولات رو میگیره 
  // . محصولات با این دو المان از ای پی آی های دیگه متمایز میشن
  const { apiId, id } = useParams()

  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  //  بعد توی (ای پی آی مپ) میاد همه (ای پی ای) هارو میگیره
  const apiMap = {
    chokolateCake: "/api/chokolatecake.json",
    birthdayCake: "/api/birthdaycake.json",
    pie: "/api/pie.json",
    strawberry: "/api/strawberrycake.json",
    cupcake: "/api/cupcake.json",
    cookie: "/api/cookie.json",
    donut: "/api/donut.json",
    cheesecake: "/api/cheesecake.json",
  }

  useEffect(() => {
    if (!apiMap[apiId]) {
      setLoading(false)
      return
    }

    // سپس با فچ میاد اون (ای پی آی آیدی) که گفتم متمایز میکنه رو میگرده ببینه تو کدوم یک از (ای پی آی) ها توی (ای پی آی مپ) میتونه پیداش کنه ؟
    fetch(apiMap[apiId])
      .then(res => res.json())
      .then(data => {
        const item = data.find(p => p.id === Number(id))
        setProduct(item)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }, [apiId, id])

  // ⬅️ حالت لودینگ
  if (loading) {
    return <div className="text-center py-20">در حال بارگذاری...</div>
  }

  // ⬅️ محصول پیدا نشد
  if (!product) {
    return <div className="text-center py-20">محصول یافت نشد</div>
  }
  console.log(BasketItems)
  return (
    <>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-10">

          {/* تصویر */}
          <div className="flex justify-center">
            <img
              src={product.img}
              alt={product.name}
              className="w-72 h-72 object-cover rounded-2xl shadow-md"
            />
          </div>

          {/* اطلاعات */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {product.name}
            </h1>

            <p className="text-gray-600 mt-4 leading-relaxed">
              {product.title}
            </p>

            <p className="mt-6 text-pink-600 font-bold text-xl">
              {product?.price?.toLocaleString()} تومان
            </p>

            <p className="mt-2 text-sm text-gray-500">
              وزن: {product.weight}
            </p>

            <button onClick={() => AddTocard(product)} className="mt-8 w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl transition">
              افزودن به سبد خرید
            </button>
          </div>

        </div>
      </div>
    </>
  )
}
