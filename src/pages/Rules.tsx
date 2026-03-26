import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ruleColors = [
  "from-cyan-500 to-blue-600",
  "from-orange-500 to-red-500",
  "from-purple-500 to-pink-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-blue-500 to-indigo-600",
  "from-rose-500 to-pink-500",
  "from-yellow-500 to-amber-500",
];

const rules = [
  { title: "Đối tượng tham gia", content: "Mọi công dân Việt Nam và du khách quốc tế yêu thích Đà Nẵng đều có thể tham gia đề cử. Không giới hạn độ tuổi, nghề nghiệp hay nơi cư trú." },
  { title: "Nội dung đề cử", content: "Đề cử phải liên quan đến du lịch Đà Nẵng, bao gồm nhưng không giới hạn: điểm tham quan, ẩm thực, văn hóa, lễ hội, trải nghiệm, dịch vụ du lịch, cảnh quan thiên nhiên." },
  { title: "Hạng mục", content: "Chương trình gồm 8 hạng mục chính: Ẩm thực, Cảnh đẹp, Văn hóa, Giải trí, Nghệ thuật, Thiên nhiên, Biển đảo và Lễ hội. Mỗi đề cử thuộc một hạng mục cụ thể." },
  { title: "Quy trình đề cử", content: "Người đề cử điền đầy đủ thông tin cá nhân và thông tin địa điểm trên form đề cử trực tuyến. Có thể đính kèm tối đa 5 hình ảnh minh họa. Mỗi người có thể đề cử nhiều địa điểm khác nhau." },
  { title: "Tiêu chí đánh giá", content: "Các đề cử được đánh giá dựa trên: tính độc đáo, giá trị du lịch, sức hấp dẫn với du khách, tính bền vững, và sự đóng góp vào phát triển du lịch Đà Nẵng." },
  { title: "Quy trình bình chọn", content: "Sau khi thu thập đề cử, Ban tổ chức sẽ sàng lọc và đưa các đề cử hợp lệ vào vòng bình chọn công khai. Kết quả Top 100 dựa trên kết hợp bình chọn cộng đồng (60%) và đánh giá chuyên gia (40%)." },
  { title: "Thời gian", content: "Giai đoạn đề cử: Từ ngày 01/03 đến 30/06/2024. Giai đoạn bình chọn: Từ ngày 01/07 đến 31/08/2024. Công bố kết quả: Tháng 09/2024." },
  { title: "Quyền sử dụng", content: "Bằng việc gửi đề cử, người tham gia đồng ý cho Ban tổ chức sử dụng nội dung và hình ảnh đề cử cho mục đích quảng bá du lịch Đà Nẵng. Bản quyền hình ảnh vẫn thuộc về người đề cử." },
];

const Rules = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="pt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 animate-gradient-shift" style={{ backgroundSize: "200% 200%" }} />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-8 left-20 w-40 h-40 rounded-full bg-white blur-3xl animate-float" />
          <div className="absolute bottom-8 right-20 w-56 h-56 rounded-full bg-white blur-3xl animate-float-slow" />
        </div>
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,0 C360,50 720,10 1440,40 L1440,60 L0,60 Z" fill="hsl(var(--background))" />
        </svg>
        <div className="container mx-auto px-4 py-16 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-4 backdrop-blur-sm">
              <BookOpen size={14} /> Thể lệ
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
              Thể lệ chương trình
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Quy định và hướng dẫn tham gia chương trình "100 Điều Thú Vị Du Lịch Đà Nẵng"
            </p>
          </motion.div>
        </div>
      </section>

      <div className="pb-20 -mt-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

            <div className="space-y-6">
              {rules.map((rule, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="relative md:pl-16"
                >
                  {/* Timeline dot */}
                  <div className={`hidden md:flex absolute left-0 top-6 w-12 h-12 rounded-full bg-gradient-to-br ${ruleColors[i]} items-center justify-center text-white font-bold text-lg shadow-lg z-10`}>
                    {i + 1}
                  </div>

                  <div className={`bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all relative overflow-hidden`}>
                    {/* Top accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${ruleColors[i]}`} />
                    <div className="flex items-start gap-3">
                      <span className={`md:hidden flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br ${ruleColors[i]} flex items-center justify-center text-white font-bold text-sm`}>
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground mb-3">{rule.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{rule.content}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Rules;
