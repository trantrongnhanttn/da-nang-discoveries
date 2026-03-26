import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="relative bg-foreground text-primary-foreground overflow-hidden">
    {/* Wave separator */}
    <svg className="absolute top-0 left-0 w-full -translate-y-[98%]" viewBox="0 0 1440 60" preserveAspectRatio="none">
      <path d="M0,40 C240,60 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="hsl(var(--foreground))" />
    </svg>
    {/* Gradient accent top line */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
    {/* Decorative blobs */}
    <div className="absolute top-10 right-20 w-48 h-48 rounded-full bg-primary/5 blur-3xl" />
    <div className="absolute bottom-10 left-20 w-32 h-32 rounded-full bg-secondary/5 blur-3xl" />

    <div className="container mx-auto px-4 py-12 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🌊</span>
            <h3 className="font-display text-xl font-bold">100 Điều Thú Vị</h3>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Chương trình tìm kiếm và tôn vinh 100 điều thú vị nhất về du lịch Đà Nẵng, 
            qua sự đề cử và bình chọn của cộng đồng.
          </p>
          {/* Social icons placeholder */}
          <div className="flex gap-3 mt-4">
            {["📘", "📸", "🐦", "📺"].map((icon, i) => (
              <span key={i} className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-primary/30 flex items-center justify-center cursor-pointer transition-colors text-sm">
                {icon}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Liên kết</h4>
          <nav className="flex flex-col gap-2 text-sm opacity-70">
            <Link to="/" className="hover:opacity-100 hover:text-secondary transition-all">Trang chủ</Link>
            <Link to="/danh-sach" className="hover:opacity-100 hover:text-secondary transition-all">Danh sách đề cử</Link>
            <Link to="/de-cu" className="hover:opacity-100 hover:text-secondary transition-all">Đề cử</Link>
            <Link to="/the-le" className="hover:opacity-100 hover:text-secondary transition-all">Thể lệ</Link>
            <Link to="/tin-tuc" className="hover:opacity-100 hover:text-secondary transition-all">Tin tức</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Liên hệ</h4>
          <div className="text-sm opacity-70 space-y-2">
            <p>📍 Sở Du lịch Đà Nẵng</p>
            <p>📧 100dieuthuvi@danang.gov.vn</p>
            <p>📞 0236 3888 100</p>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-50">
        © 2024 100 Điều Thú Vị Du Lịch Đà Nẵng. Bảo lưu mọi quyền.
      </div>
    </div>
  </footer>
);

export default Footer;
