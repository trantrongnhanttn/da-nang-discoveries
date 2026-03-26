import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
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
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Liên kết</h4>
          <nav className="flex flex-col gap-2 text-sm opacity-70">
            <Link to="/" className="hover:opacity-100 transition-opacity">Trang chủ</Link>
            <Link to="/de-cu" className="hover:opacity-100 transition-opacity">Đề cử</Link>
            <Link to="/the-le" className="hover:opacity-100 transition-opacity">Thể lệ</Link>
            <Link to="/tin-tuc" className="hover:opacity-100 transition-opacity">Tin tức</Link>
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
