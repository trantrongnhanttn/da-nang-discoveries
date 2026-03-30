export interface CategorySuggestion {
  title: string;
  items: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  fullDescription: string;
  suggestions: CategorySuggestion[];
  gradient: string;
  color: string;
  textColor: string;
  bgLight: string;
  borderColor: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "ban-sac",
    name: "Điểm chạm bản sắc",
    icon: "🏛️",
    description: "Làng nghề, văn hóa, di sản",
    fullDescription: "Khám phá và tôn vinh những giá trị văn hóa truyền thống, làng nghề di sản và bản sắc độc đáo của vùng đất Đà Nẵng — nơi mỗi nghề, mỗi làng đều kể câu chuyện riêng qua bàn tay nghệ nhân.",
    suggestions: [
      {
        title: "Làng nghề truyền thống & di sản",
        items: ["Làng đá mỹ nghệ Non Nước", "Làng mộc truyền thống", "Làng chiếu", "Làng làm nước mắm Nam Ô", "Làng rau Trà Quế"],
      },
      {
        title: "Không gian văn hóa – di sản",
        items: ["Bảo tàng Đà Nẵng", "Bảo tàng Chăm", "Di tích lịch sử", "Không gian nghệ thuật", "Cộng đồng làng quê"],
      },
      {
        title: "Trải nghiệm văn hóa bản địa",
        items: ["Làm nghề cùng nghệ nhân", "Tham gia sinh hoạt truyền thống", "Lễ hội dân gian", "Nghệ thuật dân tộc"],
      },
    ],
    gradient: "bg-gradient-purple",
    color: "from-purple-500 to-pink-500",
    textColor: "text-purple-600",
    bgLight: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    id: "vi-giac",
    name: "Điểm chạm vị giác",
    icon: "🍜",
    description: "Ẩm thực đặc sản Đà Nẵng",
    fullDescription: "Hành trình khám phá vị giác qua những món ăn đặc sản, không gian ẩm thực đặc trưng và trải nghiệm nấu nướng cùng người dân bản địa — nơi mỗi món ăn là một câu chuyện văn hóa.",
    suggestions: [
      {
        title: "Món ăn đặc sản & địa phương",
        items: ["Mì Quảng", "Bún chả cá", "Bánh tráng cuốn thịt heo", "Bánh xèo", "Hải sản tươi sống"],
      },
      {
        title: "Không gian ẩm thực đặc trưng",
        items: ["Chợ Cồn", "Chợ Hàn", "Quán ăn lâu đời", "Làng nghề ẩm thực", "Phố ẩm thực đêm"],
      },
      {
        title: "Trải nghiệm ẩm thực",
        items: ["Tour ăn uống đường phố", "Học nấu ăn cùng đầu bếp", "Trải nghiệm cùng người dân", "Khám phá ẩm thực chợ"],
      },
    ],
    gradient: "bg-gradient-sunset",
    color: "from-orange-500 to-red-500",
    textColor: "text-orange-600",
    bgLight: "bg-orange-50",
    borderColor: "border-orange-200",
  },
  {
    id: "nguyen-so",
    name: "Điểm chạm nguyên sơ",
    icon: "🌿",
    description: "Thiên nhiên – sinh thái",
    fullDescription: "Trở về với thiên nhiên hoang sơ, khám phá biển xanh, rừng núi và những vùng sinh thái nguyên vẹn — nơi Đà Nẵng hiện lên với vẻ đẹp tự nhiên chưa bị chạm tới.",
    suggestions: [
      {
        title: "Điểm đến thiên nhiên",
        items: ["Bán đảo Sơn Trà", "Ngũ Hành Sơn", "Bãi biển hoang sơ", "Đảo Cù Lao Chàm", "Rừng nguyên sinh"],
      },
      {
        title: "Trải nghiệm ngoài trời",
        items: ["Trekking Sơn Trà", "Chèo SUP", "Khám phá rừng", "Làng sinh thái", "Lặn biển ngắm san hô"],
      },
      {
        title: "Không gian hoang sơ",
        items: ["Bãi biển vắng", "Suối thác tự nhiên", "Cảnh quan núi rừng", "Vùng đầm phá", "Cánh đồng lúa"],
      },
    ],
    gradient: "bg-gradient-emerald",
    color: "from-emerald-500 to-teal-500",
    textColor: "text-emerald-600",
    bgLight: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
  {
    id: "tinh-lang",
    name: "Điểm chạm tĩnh lặng",
    icon: "🧘",
    description: "Chữa lành, chăm sóc sức khỏe",
    fullDescription: "Tìm về sự tĩnh lặng giữa nhịp sống đô thị, khám phá những không gian thiền định, chữa lành và chăm sóc sức khỏe tự nhiên — nơi tâm hồn được thư thái và cơ thể được tái tạo.",
    suggestions: [
      {
        title: "Không gian tâm linh & thiền",
        items: ["Chùa Linh Ứng", "Thiền viện", "Không gian thưởng trà", "Đền chùa cổ kính", "Vườn thiền Nhật Bản"],
      },
      {
        title: "Trải nghiệm chữa lành",
        items: ["Thiền định", "Yoga bãi biển", "Tắm thảo dược", "Trị liệu tự nhiên", "Đi bộ trong rừng (Forest bathing)"],
      },
      {
        title: "Không gian tĩnh lặng",
        items: ["Kiến trúc yên bình", "Cảnh quan thiền", "Khu nghỉ dưỡng chữa lành", "Không gian cộng đồng tĩnh lặng"],
      },
    ],
    gradient: "bg-gradient-sky",
    color: "from-cyan-400 to-blue-500",
    textColor: "text-cyan-600",
    bgLight: "bg-cyan-50",
    borderColor: "border-cyan-200",
  },
  {
    id: "khoanh-khac",
    name: "Điểm chạm khoảnh khắc",
    icon: "✨",
    description: "Lễ hội, sự kiện, trải nghiệm, check-in",
    fullDescription: "Lưu giữ những khoảnh khắc đáng nhớ nhất tại Đà Nẵng — từ lễ hội pháo hoa rực rỡ, sự kiện văn hóa đặc sắc đến những điểm check-in độc đáo và trải nghiệm không thể quên.",
    suggestions: [
      {
        title: "Sự kiện & lễ hội đặc sắc",
        items: ["Lễ hội pháo hoa quốc tế DIFF", "Lễ hội văn hóa", "Lễ hội dân gian", "Festival âm nhạc", "Sự kiện cộng đồng"],
      },
      {
        title: "Khoảnh khắc trải nghiệm",
        items: ["Ngắm bình minh Sơn Trà", "Hoàng hôn bãi biển", "Cầu Rồng phun lửa", "Đêm phố cổ Hội An", "Thả đèn hoa đăng"],
      },
      {
        title: "Không gian check-in",
        items: ["Cầu Vàng Bà Nà", "Cầu Tình Yêu", "Phố bích họa", "Quán cà phê view đẹp", "Rooftop ngắm thành phố"],
      },
    ],
    gradient: "bg-gradient-golden",
    color: "from-yellow-500 to-amber-500",
    textColor: "text-yellow-600",
    bgLight: "bg-yellow-50",
    borderColor: "border-yellow-200",
  },
  {
    id: "doi-song",
    name: "Chạm về đời sống",
    icon: "🏘️",
    description: "Sinh hoạt địa phương",
    fullDescription: "Hòa mình vào nhịp sống đời thường của người dân Đà Nẵng — từ chợ truyền thống tấp nập, bến cá rộn ràng đến những trải nghiệm chân thực về cuộc sống làng chài và nông nghiệp.",
    suggestions: [
      {
        title: "Không gian đời sống địa phương",
        items: ["Chợ truyền thống", "Bến cá Thọ Quang", "Làng chài", "Trải nghiệm làm nông", "Xưởng thủ công"],
      },
      {
        title: "Trải nghiệm sinh hoạt thường nhật",
        items: ["Đánh bắt hải sản cùng ngư dân", "Sinh hoạt tập thể", "Cuộc sống về đêm", "Chợ đêm", "Phố đi bộ"],
      },
    ],
    gradient: "bg-gradient-coral",
    color: "from-pink-500 to-rose-500",
    textColor: "text-pink-600",
    bgLight: "bg-pink-50",
    borderColor: "border-pink-200",
  },
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
  votes: number;
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
    category: "khoanh-khac",
    placeName: "Cầu Rồng",
    placeAddress: "Sông Hàn, Đà Nẵng",
    createdAt: "2024-03-15",
    votes: 128,
  },
  {
    id: "2",
    fullName: "Trần Thị Bình",
    phone: "0912345678",
    email: "binh@email.com",
    address: "456 Nguyễn Văn Linh, Đà Nẵng",
    images: [],
    description: "Bún chả cá Đà Nẵng là món ăn đặc trưng với nước dùng thanh ngọt từ cá, ăn kèm rau sống và mắm ớt đặc biệt. Quán ở đường Hoàng Diệu là nổi tiếng nhất.",
    category: "vi-giac",
    placeName: "Bún chả cá Bà Hường",
    placeAddress: "107 Hoàng Diệu, Hải Châu, Đà Nẵng",
    createdAt: "2024-03-14",
    votes: 95,
  },
  {
    id: "3",
    fullName: "Lê Minh Cường",
    phone: "0923456789",
    email: "cuong@email.com",
    address: "789 Lê Duẩn, Đà Nẵng",
    images: [],
    description: "Ngũ Hành Sơn gồm 5 ngọn núi đá vôi với nhiều hang động, chùa chiền cổ kính. Nơi đây còn nổi tiếng với làng nghề điêu khắc đá mỹ nghệ truyền thống.",
    category: "nguyen-so",
    placeName: "Ngũ Hành Sơn",
    placeAddress: "Ngũ Hành Sơn, Đà Nẵng",
    createdAt: "2024-03-13",
    votes: 210,
  },
  {
    id: "4",
    fullName: "Phạm Thị Dung",
    phone: "0934567890",
    email: "dung@email.com",
    address: "101 Bạch Đằng, Đà Nẵng",
    images: [],
    description: "Bà Nà Hills là khu du lịch nổi tiếng trên đỉnh núi với Cầu Vàng biểu tượng, làng Pháp cổ kính, và nhiều trò chơi giải trí hấp dẫn cho mọi lứa tuổi.",
    category: "khoanh-khac",
    placeName: "Bà Nà Hills",
    placeAddress: "Hòa Ninh, Hòa Vang, Đà Nẵng",
    createdAt: "2024-03-12",
    votes: 175,
  },
  {
    id: "5",
    fullName: "Hoàng Văn Em",
    phone: "0945678901",
    email: "em@email.com",
    address: "202 Phan Châu Trinh, Đà Nẵng",
    images: [],
    description: "Bãi biển Mỹ Khê được Forbes bình chọn là một trong những bãi biển quyến rũ nhất hành tinh. Cát trắng mịn, nước biển trong xanh, sóng vừa phải rất lý tưởng để tắm biển.",
    category: "nguyen-so",
    placeName: "Bãi biển Mỹ Khê",
    placeAddress: "Phước Mỹ, Sơn Trà, Đà Nẵng",
    createdAt: "2024-03-11",
    votes: 302,
  },
  {
    id: "6",
    fullName: "Võ Thị Fương",
    phone: "0956789012",
    email: "fuong@email.com",
    address: "303 Hùng Vương, Đà Nẵng",
    images: [],
    description: "Lễ hội pháo hoa quốc tế Đà Nẵng (DIFF) là sự kiện thường niên thu hút hàng triệu du khách, với các đội pháo hoa từ nhiều quốc gia trình diễn nghệ thuật ánh sáng trên bầu trời.",
    category: "khoanh-khac",
    placeName: "Lễ hội pháo hoa quốc tế DIFF",
    placeAddress: "Bờ sông Hàn, Đà Nẵng",
    createdAt: "2024-03-10",
    votes: 88,
  },
  {
    id: "7",
    fullName: "Đặng Văn Giang",
    phone: "0967890123",
    email: "giang@email.com",
    address: "404 Điện Biên Phủ, Đà Nẵng",
    images: [],
    description: "Làng đá mỹ nghệ Non Nước có lịch sử hàng trăm năm, nổi tiếng với những tác phẩm điêu khắc đá tinh xảo. Nghệ nhân nơi đây gìn giữ và phát triển nghề truyền thống qua nhiều thế hệ.",
    category: "ban-sac",
    placeName: "Làng đá mỹ nghệ Non Nước",
    placeAddress: "Ngũ Hành Sơn, Đà Nẵng",
    createdAt: "2024-03-09",
    votes: 156,
  {
    id: "8",
    fullName: "Mai Thị Hương",
    phone: "0978901234",
    email: "huong@email.com",
    address: "505 Ngô Quyền, Đà Nẵng",
    images: [],
    description: "Chùa Linh Ứng Sơn Trà với tượng Phật Quan Âm cao 67m là điểm tâm linh nổi tiếng, mang lại cảm giác bình yên và tĩnh lặng giữa thiên nhiên hùng vĩ của bán đảo.",
    category: "tinh-lang",
    placeName: "Chùa Linh Ứng Sơn Trà",
    placeAddress: "Bán đảo Sơn Trà, Đà Nẵng",
    createdAt: "2024-03-08",
    votes: 67,
  {
    id: "9",
    fullName: "Trương Văn Khoa",
    phone: "0989012345",
    email: "khoa@email.com",
    address: "606 Trưng Nữ Vương, Đà Nẵng",
    images: [],
    description: "Chợ Hàn là ngôi chợ truyền thống lâu đời nhất Đà Nẵng, nơi du khách có thể trải nghiệm nhịp sống đời thường sôi động, thưởng thức đặc sản và mua sắm quà lưu niệm.",
    category: "doi-song",
    placeName: "Chợ Hàn",
    placeAddress: "119 Trần Phú, Hải Châu, Đà Nẵng",
    createdAt: "2024-03-07",
    votes: 143,
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
