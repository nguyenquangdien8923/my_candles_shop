import React from "react";
import { ShoppingCart, LogIn } from "lucide-react";

export default function Header() {
  const primaryColor = "text-[#41452e]";
  const hoverColor = "hover:text-[#b88d44]";

  return (
    <header className="w-full bg-white/60 backdrop-blur-lg shadow-sm fixed top-0 left-0 z-50">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Navigation */}
        <div className="flex items-center space-x-12">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="https://github.com/nguyenquangdien8923/Candles_Store/blob/gh-pages/images/1.jpg" // ảnh trong public/images
              alt="Logo"
              className="w-20 h-16 object-contain"
            />
          </div>

          {/* Navigation */}
          <nav
            className={`hidden md:flex items-center space-x-8 text-lg font-semibold ${primaryColor}`}
          >
            <a href="/" className={`${hoverColor} transition`}>Trang chủ</a>
            <a href="/products" className={`${hoverColor} transition`}>Sản phẩm</a>
            <a href="/about" className={`${hoverColor} transition`}>Về chúng tôi</a>
          </nav>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button
            className={`flex items-center space-x-1 ${primaryColor} ${hoverColor} transition font-medium text-base`}
          >
            <LogIn size={20} />
            <span>Đăng nhập</span>
          </button>

          <button
            className="flex items-center bg-[#b88d44] text-white px-4 py-2 rounded-lg hover:bg-[#a3793f] transition font-medium text-base"
          >
            <ShoppingCart size={20} className="mr-1" />
            Giỏ hàng
          </button>
        </div>
      </div>
    </header>
  );
}
