import React from "react";

const Guide = () => {
  return (
    <section className="bg-pink-50 min-h-screen py-14 px-4 md:mt-50 sm:mt-40 mt-20" dir="rtl">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-pink-500 mb-4">
            راهنمای انتخاب کیک
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto leading-8">
            انتخاب کیک مناسب می‌تونه تجربه‌ی یک جشن معمولی رو به یک خاطره‌ی
            موندگار تبدیل کنه. توی این راهنما، قدم‌به‌قدم کمکتون می‌کنیم تا بهترین
            انتخاب رو متناسب با مناسبت، سلیقه و بودجه‌تون داشته باشید.
          </p>
        </div>

        {/* Guide Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-pink-500 mb-4">
              🎉 انتخاب بر اساس مناسبت
            </h2>
            <p className="text-gray-700 leading-8 mb-4">
              اولین قدم، مشخص کردن نوع مناسبت است. کیک تولد معمولاً طراحی شاد و
              رنگی دارد، در حالی که برای عروسی یا نامزدی، طراحی‌های مینیمال و
              رسمی‌تر پیشنهاد می‌شود.
            </p>
            <ul className="list-disc pr-5 text-gray-600 space-y-2 text-sm">
              <li>تولد کودکان: طرح‌های فانتزی و رنگی</li>
              <li>تولد بزرگسالان: طراحی ساده یا شخصی‌سازی‌شده</li>
              <li>عروسی و سالگرد: کیک‌های چندطبقه و کلاسیک</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-pink-500 mb-4">
              🍰 انتخاب طعم مناسب
            </h2>
            <p className="text-gray-700 leading-8 mb-4">
              طعم کیک یکی از مهم‌ترین عوامل رضایت مهمان‌هاست. اگر سلیقه مهمان‌ها
              متنوعه، طعم‌های کلاسیک همیشه انتخاب امن‌تری هستن.
            </p>
            <ul className="list-disc pr-5 text-gray-600 space-y-2 text-sm">
              <li>شکلاتی: محبوب و همیشگی</li>
              <li>وانیل و توت‌فرنگی: سبک و ملایم</li>
              <li>نسکافه یا کارامل: خاص و بزرگسال‌پسند</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-pink-500 mb-4">
              📏 انتخاب وزن و تعداد نفرات
            </h2>
            <p className="text-gray-700 leading-8 mb-4">
              وزن کیک باید متناسب با تعداد مهمان‌ها انتخاب بشه. انتخاب کیک خیلی
              کوچک یا خیلی بزرگ می‌تونه تجربه جشن رو تحت تأثیر قرار بده.
            </p>
            <ul className="list-disc pr-5 text-gray-600 space-y-2 text-sm">
              <li>۶ تا ۸ نفر: حدود ۱ کیلو</li>
              <li>۱۰ تا ۱۵ نفر: ۱.۵ تا ۲ کیلو</li>
              <li>۲۰ نفر به بالا: کیک‌های دو یا چندطبقه</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-pink-500 mb-4">
              🎨 طراحی و شخصی‌سازی
            </h2>
            <p className="text-gray-700 leading-8 mb-4">
              طراحی کیک می‌تونه کاملاً مطابق سلیقه شما انجام بشه. انتخاب رنگ، تم
              جشن، نوشته روی کیک و حتی مدل برش، همه قابل شخصی‌سازی هستن.
            </p>
            <p className="text-gray-600 text-sm leading-7">
              پیشنهاد می‌کنیم برای طراحی‌های خاص، حتماً چند روز زودتر سفارش خودتون
              رو ثبت کنید.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center bg-white rounded-3xl shadow-lg p-10">
          <h3 className="text-2xl font-bold text-pink-500 mb-4">
            هنوز مطمئن نیستید چه کیکی مناسب شماست؟
          </h3>
          <p className="text-gray-700 mb-6 leading-8">
            کارشناسان شیرین‌کده با خوشحالی شما رو راهنمایی می‌کنن تا بهترین انتخاب
            رو داشته باشید.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-xl font-semibold transition">
            دریافت مشاوره
          </button>
        </div>
      </div>
    </section>
  );
};

export default Guide;

