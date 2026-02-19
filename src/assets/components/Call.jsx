import React, { useState } from "react";
// صفحه تماس با ما
const Call = () => {

  const [Namespan, setNamespan] = useState(false)
  const [NameError, setNameError] = useState()
  const [PhoneError, setPhoneError] = useState()
  const [Phonespan, setPhonespan] = useState(false)
  const [NameForButton, setNameForButton] = useState(false)
  const [PhoneForButton, setPhoneForButton] = useState(false)
  const Namehandler = (e) => {
    let name = e.target.value
    console.log(name)
    if (name.length < 2) {
      setNameError("نام نباید زیر ۲ حرف باشد");
      setNamespan(true);
      setNameForButton(false);
      console.log( NameForButton)
    } if(name.length>2) {
      setNamespan(false);
      setNameForButton(true);
      console.log( NameForButton)
    }

  }


  const Phonehandler = (e) => {
    let phone = e.target.value;

    if (isNaN(phone)) {
      setPhoneError("شماره تماس باید عدد باشد");
      setPhonespan(true);
      setPhoneForButton(false);
      console.log( PhoneForButton)
      return;
    }

    if (phone.length < 11) {
      setPhoneError("شماره تماس نباید کمتر از 11 رقم باشد");
      setPhonespan(true);
      setPhoneForButton(false);
      console.log( PhoneForButton)
      return;
    }

    if (phone.length === 11) {
      // setPhoneError("شماره تماس نباید بیشتر از 11 رقم باشد");
      setPhonespan(false);
      setPhoneForButton(true);
      console.log( PhoneForButton)
      return;
    }

    // // فقط اگر هیچ‌کدوم از خطاها نبود
    // setPhonespan(false);
    // setPhoneForButton(true);

    console.log(NameForButton, PhoneForButton)

  }
  return (
    <section className="bg-pink-50 min-h-screen py-14 px-4 md:mt-50 sm:mt-40 mt-20" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-pink-500 mb-4">
            تماس با ما
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-8">
            خوشحال می‌شیم صداتون رو بشنویم. اگر سوالی دارید، قصد ثبت سفارش دارید یا
            می‌خواید درباره طراحی کیک اختصاصی مشاوره بگیرید، تیم شیرین‌کده با عشق پاسخگوئه.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-10 p-8 md:p-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold text-pink-500 mb-6">
              اطلاعات تماس
            </h2>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <h3 className="font-semibold text-gray-800">آدرس فروشگاه</h3>
                  <p className="text-gray-600 text-sm leading-7">
                    تهران، خیابان نمونه، کوچه شیرین، پلاک ۱۲
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <h3 className="font-semibold text-gray-800">شماره تماس</h3>
                  <p className="text-gray-600 text-sm">021-12345678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <h3 className="font-semibold text-gray-800">ایمیل</h3>
                  <p className="text-gray-600 text-sm">info@shirinkadeh.ir</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">⏰</span>
                <div>
                  <h3 className="font-semibold text-gray-800">ساعات کاری</h3>
                  <p className="text-gray-600 text-sm leading-7">
                    همه‌روزه از ساعت ۹ صبح تا ۹ شب
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-5 bg-pink-50 border border-pink-100 rounded-2xl">
              <p className="text-sm text-gray-700 leading-7">
                💡 <strong>نکته:</strong> برای سفارش کیک‌های مناسبتی و طراحی اختصاصی،
                لطفاً حداقل ۲۴ تا ۴۸ ساعت زودتر با ما تماس بگیرید.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-bold text-pink-500 mb-6">
              فرم ارتباط با ما
            </h2>

            <form className="space-y-5">
              <div>
                <label className="block text-sm text-gray-700 mb-1">نام شما</label>
                <input onChange={Namehandler}
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  className="mb-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
                {Namespan && <span className="border-2 border-red-300 rounded-2xl px-3 mt-2 block">{NameError}</span>}
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">شماره تماس</label>
                <input onBlur={Phonehandler}
                  type="text"
                  placeholder="09xxxxxxxxx"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
                {Phonespan && <span className="border-2 border-red-300 rounded-2xl px-3 mt-2 block">{PhoneError}</span>}
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">ایمیل (اختیاری)</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">پیام شما</label>
                <textarea
                  rows="4"
                  placeholder="متن پیام خود را بنویسید..."
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                ></textarea>
              </div>

              <button disabled={!(NameForButton && PhoneForButton)}
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-semibold transition"
              >
                ارسال پیام
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Call;

