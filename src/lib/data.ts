export const CATEGORIES = [
  { id: "am-thuc", name: "Ẩm thực", icon: "🍜", description: "Món ngon đặc sản Đà Nẵng", gradient: "bg-gradient-sunset", color: "from-orange-500 to-red-500", textColor: "text-orange-600", bgLight: "bg-orange-50", borderColor: "border-orange-200" },
  { id: "canh-dep", name: "Cảnh đẹp", icon: "🏞️", description: "Danh lam thắng cảnh", gradient: "bg-gradient-ocean", color: "from-blue-500 to-indigo-600", textColor: "text-blue-600", bgLight: "bg-blue-50", borderColor: "border-blue-200" },
  { id: "van-hoa", name: "Văn hóa", icon: "🎭", description: "Di tích lịch sử & văn hóa", gradient: "bg-gradient-purple", color: "from-purple-500 to-pink-500", textColor: "text-purple-600", bgLight: "bg-purple-50", borderColor: "border-purple-200" },
  { id: "giai-tri", name: "Giải trí", icon: "🎢", description: "Khu vui chơi & giải trí", gradient: "bg-gradient-coral", color: "from-pink-500 to-rose-500", textColor: "text-pink-600", bgLight: "bg-pink-50", borderColor: "border-pink-200" },
  { id: "nghe-thuat", name: "Nghệ thuật", icon: "🎨", description: "Nghệ thuật & thủ công", gradient: "bg-gradient-warm", color: "from-amber-500 to-orange-500", textColor: "text-amber-600", bgLight: "bg-amber-50", borderColor: "border-amber-200" },
  { id: "thien-nhien", name: "Thiên nhiên", icon: "🌿", description: "Thiên nhiên hoang sơ", gradient: "bg-gradient-emerald", color: "from-emerald-500 to-teal-500", textColor: "text-emerald-600", bgLight: "bg-emerald-50", borderColor: "border-emerald-200" },
  { id: "bien-dao", name: "Biển đảo", icon: "🏖️", description: "Bãi biển & hải đảo", gradient: "bg-gradient-sky", color: "from-cyan-400 to-blue-500", textColor: "text-cyan-600", bgLight: "bg-cyan-50", borderColor: "border-cyan-200" },
  { id: "le-hoi", name: "Lễ hội", icon: "🎆", description: "Lễ hội & sự kiện", gradient: "bg-gradient-golden", color: "from-yellow-500 to-amber-500", textColor: "text-yellow-600", bgLight: "bg-yellow-50", borderColor: "border-yellow-200" },
];

export interface Nomination {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  address: string;
  images: string[];
  description: string;
  category: string;
  placeName: string;
  placeAddress: string;
  createdAt: string;
}

export const SAMPLE_NOMINATIONS: Nomination[] = [
  {
    id: "1",
    fullName: "Nguyễn Văn An",
    phone: "0901234567",
    email: "an@email.com",
    address: "123 Trần Phú, Đà Nẵng",
    images: [],
    description: "Cầu Rồng là biểu tượng của thành phố Đà Nẵng, được thiết kế hình rồng phun lửa và nước vào mỗi tối cuối tuần. Đây là cây cầu độc đáo nhất Việt Nam với kiến trúc ấn tượng.",
    category: "canh-dep",
    placeName: "Cầu Rồng",
    placeAddress: "Sông Hàn, Đà Nẵng",
    createdAt: "2024-03-15",
  },
  {
    id: "2",
    fullName: "Trần Thị Bình",
    phone: "0912345678",
    email: "binh@email.com",
    address: "456 Nguyễn Văn Linh, Đà Nẵng",
    images: [],
    description: "Bún chả cá Đà Nẵng là món ăn đặc trưng với nước dùng thanh ngọt từ cá, ăn kèm rau sống và mắm ớt đặc biệt. Quán ở đường Hoàng Diệu là nổi tiếng nhất.",
    category: "am-thuc",
    placeName: "Bún chả cá Bà Hường",
    placeAddress: "107 Hoàng Diệu, Hải Châu, Đà Nẵng",
    createdAt: "2024-03-14",
  },
  {
    id: "3",
    fullName: "Lê Minh Cường",
    phone: "0923456789",
    email: "cuong@email.com",
    address: "789 Lê Duẩn, Đà Nẵng",
    images: [],
    description: "Ngũ Hành Sơn gồm 5 ngọn núi đá vôi với nhiều hang động, chùa chiền cổ kính. Nơi đây còn nổi tiếng với làng nghề điêu khắc đá mỹ nghệ truyền thống.",
    category: "thien-nhien",
    placeName: "Ngũ Hành Sơn",
    placeAddress: "Ngũ Hành Sơn, Đà Nẵng",
    createdAt: "2024-03-13",
  },
  {
    id: "4",
    fullName: "Phạm Thị Dung",
    phone: "0934567890",
    email: "dung@email.com",
    address: "101 Bạch Đằng, Đà Nẵng",
    images: [],
    description: "Bà Nà Hills là khu du lịch nổi tiếng trên đỉnh núi với Cầu Vàng biểu tượng, làng Pháp cổ kính, và nhiều trò chơi giải trí hấp dẫn cho mọi lứa tuổi.",
    category: "giai-tri",
    placeName: "Bà Nà Hills",
    placeAddress: "Hòa Ninh, Hòa Vang, Đà Nẵng",
    createdAt: "2024-03-12",
  },
  {
    id: "5",
    fullName: "Hoàng Văn Em",
    phone: "0945678901",
    email: "em@email.com",
    address: "202 Phan Châu Trinh, Đà Nẵng",
    images: [],
    description: "Bãi biển Mỹ Khê được Forbes bình chọn là một trong những bãi biển quyến rũ nhất hành tinh. Cát trắng mịn, nước biển trong xanh, sóng vừa phải rất lý tưởng để tắm biển.",
    category: "bien-dao",
    placeName: "Bãi biển Mỹ Khê",
    placeAddress: "Phước Mỹ, Sơn Trà, Đà Nẵng",
    createdAt: "2024-03-11",
  },
  {
    id: "6",
    fullName: "Võ Thị Fương",
    phone: "0956789012",
    email: "fuong@email.com",
    address: "303 Hùng Vương, Đà Nẵng",
    images: [],
    description: "Lễ hội pháo hoa quốc tế Đà Nẵng (DIFF) là sự kiện thường niên thu hút hàng triệu du khách, với các đội pháo hoa từ nhiều quốc gia trình diễn nghệ thuật ánh sáng trên bầu trời.",
    category: "le-hoi",
    placeName: "Lễ hội pháo hoa quốc tế DIFF",
    placeAddress: "Bờ sông Hàn, Đà Nẵng",
    createdAt: "2024-03-10",
  },
];

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export const SAMPLE_NEWS: NewsItem[] = [
  {
    id: "1",
    title: "Khởi động chương trình '100 điều thú vị' du lịch Đà Nẵng năm 2024",
    excerpt: "Chương trình nhằm tìm kiếm và tôn vinh 100 điểm đến, trải nghiệm thú vị nhất tại thành phố biển Đà Nẵng qua sự đề cử của cộng đồng.",
    date: "2024-03-20",
    category: "Sự kiện",
  },
  {
    id: "2",
    title: "Đà Nẵng lọt top 10 điểm đến hàng đầu châu Á",
    excerpt: "Tạp chí du lịch quốc tế vừa công bố Đà Nẵng nằm trong danh sách 10 điểm đến hấp dẫn nhất châu Á năm 2024.",
    date: "2024-03-18",
    category: "Tin tức",
  },
  {
    id: "3",
    title: "Hơn 500 đề cử được gửi về trong tuần đầu tiên",
    excerpt: "Chương trình nhận được sự hưởng ứng nhiệt tình từ cộng đồng với hơn 500 đề cử từ khắp cả nước trong tuần đầu ra mắt.",
    date: "2024-03-15",
    category: "Cập nhật",
  },
  {
    id: "4",
    title: "Mở rộng hạng mục đề cử cho mùa giải 2024",
    excerpt: "Ban tổ chức quyết định bổ sung thêm 2 hạng mục mới nhằm đa dạng hóa các đề cử và phản ánh đầy đủ vẻ đẹp của Đà Nẵng.",
    date: "2024-03-12",
    category: "Thông báo",
  },
];
