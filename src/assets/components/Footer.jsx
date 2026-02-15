import React from 'react'
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-pink-50 text-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-pink-600 mb-4">
            🍰 Sweet Cake
          </h2>
          <p className="text-sm leading-relaxed">
            سفارش انواع کیک تولد، عروسی و مناسبتی با بهترین مواد اولیه و
            طراحی اختصاصی.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">دسترسی سریع</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-pink-500 cursor-pointer"><Link to={"/"}>خانه</Link></li>
            <li className="hover:text-pink-500 cursor-pointer"> <Link to={"/Guid"}>راهنمای سفارش کیک </Link></li>
            <li className="hover:text-pink-500 cursor-pointer"><Link to={"Chokolate"}>نمونه کار ها</Link> </li>
            <li className="hover:text-pink-500 cursor-pointer"><Link to={"/AboutUs"}>درباره ما</Link> </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">تماس با ما</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 تهران، خیابان شیرینی</li>
            <li>📞 0912 123 4567</li>
            <li>✉️ info@sweetcake.ir</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-lg mb-4">ما را دنبال کنید</h3>
          <div className="flex gap-4 text-xl">
            <span className="cursor-pointer hover:text-pink-500">📷</span>
            <span className="cursor-pointer hover:text-pink-500">📘</span>
            <span className="cursor-pointer hover:text-pink-500">💬</span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-pink-200 text-center py-4 text-sm">
        © {new Date().getFullYear()} Sweet Cake — همه حقوق محفوظ است 🍩
      </div>
    </footer>
  );
}

