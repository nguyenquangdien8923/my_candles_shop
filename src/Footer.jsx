import React from "react";

export default function Footer() {
  // Định nghĩa màu sắc để đồng bộ với Header đã chỉnh sửa
  const primaryColor = "text-[#41452e]"; // Xanh rêu đậm - Tiêu đề
  const accentColor = "hover:text-[#b88d44]"; // Vàng nâu - Hover
  const textColor = "text-gray-700"; // Màu chữ nội dung

  return (
    // Nền tràn toàn bộ chiều rộng với w-full
    <footer className="w-full bg-white/80 mt-8 backdrop-blur-md border-t border-gray-200 shadow-sm shadow-lg">
        {/* w-full bg-white/80 backdrop-blur-md mt-16 border-t border-gray-200 shadow-lg */}
      {/* Wrapper toàn chiều rộng */}
      <div className="w-full">
        {/* Container nội dung căn giữa, giới hạn max-width giống Header */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          
          {/* Logo/Giới thiệu */}
          <div>
            <h3 className={`text-xl font-bold mb-3 ${primaryColor}`}>
              AMBER
            </h3>
            <p className={`leading-relaxed ${textColor}`}>
              Chúng tôi mang đến những sản phẩm <strong>nến thơm thủ công</strong> 
              từ nguyên liệu thiên nhiên, giúp bạn thư giãn và tận hưởng không gian sống.
            </p>
          </div>

          {/* Liên kết nhanh */}
          <div>
            <h3 className={`text-lg font-semibold mb-3 ${primaryColor}`}>
              Liên kết nhanh
            </h3>
            <ul className="space-y-3">
              <li><a href="/" className={`${textColor} ${accentColor} transition`}>Trang chủ</a></li>
              <li><a href="/products" className={`${textColor} ${accentColor} transition`}>Sản phẩm</a></li>
              <li><a href="/about" className={`${textColor} ${accentColor} transition`}>Về chúng tôi</a></li>
              <li><a href="/faq" className={`${textColor} ${accentColor} transition`}>Câu hỏi thường gặp (FAQ)</a></li>
            </ul>
          </div>

          {/* Chính sách */}
          <div>
            <h3 className={`text-lg font-semibold mb-3 ${primaryColor}`}>
              Chính sách
            </h3>
            <ul className="space-y-3">
              <li><a href="/policy/shipping" className={`${textColor} ${accentColor} transition`}>Chính sách giao hàng</a></li>
              <li><a href="/policy/return" className={`${textColor} ${accentColor} transition`}>Chính sách đổi trả</a></li>
              <li><a href="/policy/privacy" className={`${textColor} ${accentColor} transition`}>Chính sách bảo mật</a></li>
              <li><a href="/terms" className={`${textColor} ${accentColor} transition`}>Điều khoản sử dụng</a></li>
            </ul>
          </div>

          {/* Thông tin liên hệ */}
          <div>
            <h3 className={`text-lg font-semibold mb-3 ${primaryColor}`}>
              Liên hệ
            </h3>
            <ul className="space-y-3 text-sm">
              <li className={textColor}>📍 123 Đường Hoa Hồng, Quận 1, TP.HCM</li>
              <li className={textColor}>
                📞 <a href="tel:0909123456" className={`${textColor} ${accentColor} transition`}>0909 123 456</a>
              </li>
              <li className={textColor}>
                ✉️ <a href="mailto:support@candleco.vn" className={`${textColor} ${accentColor} transition`}>
                  support@candleco.vn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bản quyền */}
      <div className="border-t border-gray-100 mt-4">
        <div className="max-w-7xl mx-auto text-center py-5 text-sm text-gray-500">
          © {new Date().getFullYear()} <strong>CandleCo</strong>. All rights reserved. Được thiết kế với đam mê.
        </div>
      </div>
    </footer>
  );
}
