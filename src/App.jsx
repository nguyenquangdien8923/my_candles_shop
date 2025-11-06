import React, { useState, useEffect, useMemo } from "react";
import { HashRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { FiUser, FiShoppingCart, FiSearch } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

// ===== Static product data (move to src/data/products.js if you want) =====
const PRODUCTS = [
  {
    id: 1,
    title: "Nến thơm Lavender Bliss",
    price: 199000,
    img: "./images/2.png",
    short: "Hương lavender thư giãn, thời gian cháy 40 giờ.",
    benefits: ["Thư giãn", "Giảm stress", "Trang trí nội thất"],
    market: "Tặng quà, spa, gia đình"
  },
  {
    id: 2,
    title: "Nến thơm Citrus Zest",
    price: 169000,
    img: "./images/3.png",
    short: "Hương cam tươi mát, tạo không khí sảng khoái.",
    benefits: ["Tăng tập trung", "Khử mùi"],
    market: "Văn phòng, phòng khách"
  },
  {
    id: 3,
    title: "Nến thơm Vanilla Cozy",
    price: 209000,
    img: "./images/4.png",
    short: "Hương vanilla ấm áp, phù hợp mùa lạnh.",
    benefits: ["Ấm áp", "Tạo không khí lãng mạn"],
    market: "Nhà hàng, quà tặng" 
  },
  // more items (duplicate variations for demo pagination)
  { id: 4, title: "Nến thơm Rose Glow", price: 189000, img: "./images/5.png", short: "Hương hoa hồng quyến rũ.", benefits: ["Lãng mạn"], market: "Quà tặng" },
  { id: 5, title: "Nến thơm Mint Fresh", price: 159000, img: "./images/6.png", short: "Hương bạc hà sảng khoái.", benefits: ["Khử mùi"], market: "Phòng tắm" },
  { id: 6, title: "Nến thơm Ocean Breeze", price: 179000, img: "./images/7.png", short: "Hương biển nhẹ nhàng.", benefits: ["Thư giãn"], market: "Resort" },
  { id: 7, title: "Nến thơm Coffee Warm", price: 219000, img: "./images/8.png", short: "Hương cà phê ấm áp.", benefits: ["Tỉnh táo"], market: "Quán cafe" },
  { id: 8, title: "Nến thơm Sandalwood", price: 229000, img: "./images/9.png", short: "Gỗ đàn hương ấm dịu.", benefits: ["Thiền", "Tập trung"], market: "Yoga" },
  { id: 9, title: "Nến thơm Sandalwood", price: 229000, img: "./images/10.png", short: "Gỗ đàn hương ấm dịu.", benefits: ["Thiền", "Tập trung"], market: "Yoga" },
  { id: 10, title: "Nến thơm Sandalwood", price: 229000, img: "./images/11.png", short: "Gỗ đàn hương ấm dịu.", benefits: ["Thiền", "Tập trung"], market: "Yoga" },
  { id: 11, title: "Nến thơm Sandalwood", price: 229000, img: "./images/12.png", short: "Gỗ đàn hương ấm dịu.", benefits: ["Thiền", "Tập trung"], market: "Yoga" }
];

// ===== Helpers =====
const formatVND = (n) => n.toLocaleString("vi-VN", { style: "currency", currency: "VND" });

// ===== Main App =====
export default function App() {
  return (
    <Router>
      <div
        className="w-full min-h-screen bg-cover bg-center bg-fixed flex flex-col"
        style={{ backgroundImage: "url('/images/bg-blur.jpg')" }}
      >
        {/* Lớp nền mờ */}
        <Background />

        {/* Nội dung chính */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />

          {/* Main căn giữa */}
          <main className="flex-1 flex justify-center items-start pt-32">
            <div className="max-w-7xl w-full px-6">
              <Routes>
                <Route path="/my_candles_shop/#/" element={<Home />} />
                <Route path="/my_candles_shop/#/products" element={<Products />} />
                <Route path="/my_candles_shop/#/about" element={<About />} />
              </Routes>
            </div>
          </main>

          {/* Footer full width, căn giữa nội dung */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}
// ===== Background component =====
function Background(){
  // Use first product image as blurred background
  const bg = PRODUCTS[0].img;
  return (
    <div className="fixed inset-0 -z-10">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-lg opacity-30"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/60" />
    </div>
  );
}

// ===== Home page =====
function Home(){
  return (
    <section>
      <Hero />

      <section className="mt-8">
        <div className="grid md:grid-cols-3 gap-6">
          {PRODUCTS.slice(0,3).map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i*0.1 }}
              className="bg-white/80 rounded-xl p-4 shadow"
            >
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover rounded-md" />
              <h3 className="mt-3 font-semibold">{p.title}</h3>
              <p className="text-sm mt-1">{p.short}</p>
              <div className="mt-2 font-semibold text-amber-600">{formatVND(p.price)}</div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <div className="bg-white/80 rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold">Vì sao chọn nến thơm của chúng tôi?</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold">Giá trị</h4>
              <p className="text-sm mt-1">Nguyên liệu thiên nhiên, an toàn cho sức khỏe, thiết kế đẹp.</p>
            </div>
            <div>
              <h4 className="font-semibold">Tác dụng</h4>
              <p className="text-sm mt-1">Thư giãn, tạo không gian, dùng làm quà tặng.</p>
            </div>
            <div>
              <h4 className="font-semibold">Thị trường</h4>
              <p className="text-sm mt-1">Trong nước và xuất khẩu, khách hàng cá nhân, spa, quán cafe.</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

function Hero(){
  return (
    <motion.div className="rounded-xl p-6 bg-white/70 shadow" initial={{ opacity:0 }} animate={{ opacity:1 }}>
      <div className="md:flex items-center gap-6">
        <img src={PRODUCTS[0].img} alt="hero" className="w-full md:w-1/3 h-64 object-cover rounded-md" />
        <div className="mt-4 md:mt-0">
          <h1 className="text-3xl font-bold">CandleCo — Nến thơm thủ công</h1>
          <p className="mt-2 text-gray-700">Chúng tôi tạo ra nến thơm từ nguyên liệu thiên nhiên, dành cho những khoảnh khắc thư giãn và tĩnh lặng.</p>
          <div className="mt-4 flex gap-3">
            <Link to="/products" className="px-4 py-2 bg-amber-500 text-white rounded-md">Xem sản phẩm</Link>
            <a href="#" className="px-4 py-2 border rounded-md">Tìm hiểu thêm</a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ===== Products page =====
function Products(){
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [perPage] = useState(6);
  const [cart, setCart] = useState(() => {
    try{ return JSON.parse(localStorage.getItem('cart')||'[]'); } catch { return []; }
  });

  useEffect(()=>{ localStorage.setItem('cart', JSON.stringify(cart)); }, [cart]);

  const filtered = useMemo(()=>{
    return PRODUCTS.filter(p => p.title.toLowerCase().includes(q.toLowerCase()) || p.short.toLowerCase().includes(q.toLowerCase()));
  }, [q]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  useEffect(()=>{ if(page > totalPages) setPage(1); }, [totalPages]);

  const pageItems = filtered.slice((page-1)*perPage, page*perPage);

  function addToCart(item){
    setCart(prev => {
      const exists = prev.find(i => i.id === item.id);
      if(exists) return prev.map(i=> i.id===item.id ? {...i, qty: i.qty+1} : i);
      return [...prev, {...item, qty:1}];
    });
    alert('Đã thêm vào giỏ hàng!');
  }

  return (
    <section>
      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-2 border rounded px-3 py-1">
          <FiSearch />
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Tìm kiếm sản phẩm..." className="outline-none px-2" />
        </div>
        <div className="text-sm">Tổng: <strong>{filtered.length}</strong> sản phẩm</div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {pageItems.map(p=> (
          <motion.div key={p.id} initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="bg-white/80 p-4 rounded-xl shadow">
            <img src={p.img} alt={p.title} className="w-full h-44 object-cover rounded" />
            <h3 className="mt-3 font-semibold">{p.title}</h3>
            <p className="text-sm mt-1">{p.short}</p>
            <div className="mt-3 flex items-center justify-between">
              <div className="font-semibold text-amber-600">{formatVND(p.price)}</div>
              <button onClick={()=>addToCart(p)} className="px-3 py-1 bg-amber-500 text-white rounded">Thêm</button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-center gap-2">
        <button onClick={()=>setPage(p=>Math.max(1,p-1))} className="px-3 py-1 border rounded">Trước</button>
        <div>Trang {page} / {totalPages}</div>
        <button onClick={()=>setPage(p=>Math.min(totalPages,p+1))} className="px-3 py-1 border rounded">Sau</button>
      </div>
    </section>
  );
}

// ===== About page =====
function About(){
  return (
    <section>
      <div className="bg-white/80 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold">Về AMBER</h2>
        <p className="mt-4">AMBER là thương hiệu nến thơm thủ công được thành lập với sứ mệnh mang lại những phút giây thư giãn bằng hương thơm tự nhiên. Chúng tôi sử dụng nguyên liệu sạch, sáp thực vật và tinh dầu tự nhiên.</p>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold">Sứ mệnh</h4>
            <p className="text-sm mt-1">Tạo ra sản phẩm an toàn, đẹp và thân thiện môi trường.</p>
          </div>
          <div>
            <h4 className="font-semibold">Tầm nhìn</h4>
            <p className="text-sm mt-1">Trở thành thương hiệu nến thơm được yêu thích trong khu vực và xuất khẩu.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
