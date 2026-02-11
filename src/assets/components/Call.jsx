import React from "react";

const Call = () => {
  return (
    <section className="bg-pink-50 min-h-screen py-14 px-4" dir="rtl">
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
                <input
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">شماره تماس</label>
                <input
                  type="text"
                  placeholder="09xxxxxxxxx"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
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

              <button
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

