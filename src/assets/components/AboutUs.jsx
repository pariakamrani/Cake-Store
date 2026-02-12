import React from "react";

const AboutUs = () => {
    return (
        <section className="bg-pink-50 min-h-screen py-14 px-4" dir="rtl">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-8 md:p-12">
                    {/* Text Content */}
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-pink-500 mb-6">
                            درباره فروشگاه کیک شیرین‌کده
                        </h1>


                        <p className="text-gray-700 leading-8 mb-4">
                            <strong>شیرین‌کده</strong> فقط یک فروشگاه کیک نیست؛ نتیجه سال‌ها علاقه، تجربه و
                            توجه به جزئیاته. ما کارمون رو با یک هدف ساده شروع کردیم: درست کردن کیک‌هایی
                            که هم طعم خونگی داشته باشن و هم از نظر ظاهر، خاص و به‌یادموندنی باشن.
                        </p>


                        <p className="text-gray-700 leading-8 mb-4">
                            در شیرین‌کده، کیفیت اتفاقی نیست. از انتخاب مواد اولیه تازه و درجه‌یک گرفته
                            تا رعایت کامل اصول بهداشتی و استفاده از دستورپخت‌های تست‌شده، همه‌چیز با دقت
                            و وسواس انجام می‌شه تا خیالتون از هر بابت راحت باشه.
                        </p>


                        <p className="text-gray-700 leading-8 mb-6">
                            فرقی نمی‌کنه برای تولد، سالگرد، عروسی یا حتی یک عصرونه ساده سفارش بدید؛ ما
                            باور داریم هر مناسبت کوچیک یا بزرگ، ارزش شیرین‌تر شدن رو داره و افتخار
                            می‌کنیم بخشی از خاطره‌های خوب شما باشیم.
                        </p>


                        {/* Values */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            <div className="bg-pink-50 border border-pink-100 rounded-2xl p-4">
                                <h3 className="font-bold text-pink-500 mb-1">کیفیت بدون مصالحه</h3>
                                <p className="text-sm text-gray-600 leading-7">
                                    استفاده از مواد اولیه تازه و شکلات و خامه درجه‌یک، اصل همیشگی ماست.
                                </p>
                            </div>


                            <div className="bg-pink-50 border border-pink-100 rounded-2xl p-4">
                                <h3 className="font-bold text-pink-500 mb-1">طراحی اختصاصی</h3>
                                <p className="text-sm text-gray-600 leading-7">
                                    هر کیک می‌تونه مطابق سلیقه، تم جشن و خواسته شما طراحی بشه.
                                </p>
                            </div>


                            <div className="bg-pink-50 border border-pink-100 rounded-2xl p-4">
                                <h3 className="font-bold text-pink-500 mb-1">تازگی روزانه</h3>
                                <p className="text-sm text-gray-600 leading-7">
                                    هیچ کیکی از قبل آماده نمی‌شه؛ همه سفارش‌ها تازه و همون روز تهیه می‌شن.
                                </p>
                            </div>


                            <div className="bg-pink-50 border border-pink-100 rounded-2xl p-4">
                                <h3 className="font-bold text-pink-500 mb-1">تحویل متعهدانه</h3>
                                <p className="text-sm text-gray-600 leading-7">
                                    زمان‌بندی دقیق و تحویل به‌موقع، بخشی از تعهد ما به مشتریه.
                                </p>
                            </div>
                        </div>


                        {/* Badges */}
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm">🎂 کیک تازه روز</span>
                            <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm">🍫 مواد اولیه ممتاز</span>
                            <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm">🎨 طراحی سفارشی</span>
                            <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm">🚚 ارسال مطمئن</span>
                        </div>
                    </div>


                    {/* Image */}
                    <div className="w-full h-full">
                        <img
                            src={`${import.meta.env.BASE_URL}img/c3.jpg`}
                            alt="کیک تازه و دست‌ساز"
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;