import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const rules = [
  {
    title: "1. Đối tượng tham gia",
    content: "Mọi công dân Việt Nam và du khách quốc tế yêu thích Đà Nẵng đều có thể tham gia đề cử. Không giới hạn độ tuổi, nghề nghiệp hay nơi cư trú.",
  },
  {
    title: "2. Nội dung đề cử",
    content: "Đề cử phải liên quan đến du lịch Đà Nẵng, bao gồm nhưng không giới hạn: điểm tham quan, ẩm thực, văn hóa, lễ hội, trải nghiệm, dịch vụ du lịch, cảnh quan thiên nhiên.",
  },
  {
    title: "3. Hạng mục",
    content: "Chương trình gồm 8 hạng mục chính: Ẩm thực, Cảnh đẹp, Văn hóa, Giải trí, Nghệ thuật, Thiên nhiên, Biển đảo và Lễ hội. Mỗi đề cử thuộc một hạng mục cụ thể.",
  },
  {
    title: "4. Quy trình đề cử",
    content: "Người đề cử điền đầy đủ thông tin cá nhân và thông tin địa điểm trên form đề cử trực tuyến. Có thể đính kèm tối đa 5 hình ảnh minh họa. Mỗi người có thể đề cử nhiều địa điểm khác nhau.",
  },
  {
    title: "5. Tiêu chí đánh giá",
    content: "Các đề cử được đánh giá dựa trên: tính độc đáo, giá trị du lịch, sức hấp dẫn với du khách, tính bền vững, và sự đóng góp vào phát triển du lịch Đà Nẵng.",
  },
  {
    title: "6. Quy trình bình chọn",
    content: "Sau khi thu thập đề cử, Ban tổ chức sẽ sàng lọc và đưa các đề cử hợp lệ vào vòng bình chọn công khai. Kết quả Top 100 dựa trên kết hợp bình chọn cộng đồng (60%) và đánh giá chuyên gia (40%).",
  },
  {
    title: "7. Thời gian",
    content: "Giai đoạn đề cử: Từ ngày 01/03 đến 30/06/2024. Giai đoạn bình chọn: Từ ngày 01/07 đến 31/08/2024. Công bố kết quả: Tháng 09/2024.",
  },
  {
    title: "8. Quyền sử dụng",
    content: "Bằng việc gửi đề cử, người tham gia đồng ý cho Ban tổ chức sử dụng nội dung và hình ảnh đề cử cho mục đích quảng bá du lịch Đà Nẵng. Bản quyền hình ảnh vẫn thuộc về người đề cử.",
  },
];

const Rules = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Thể lệ
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Thể lệ chương trình
            </h1>
            <p className="text-muted-foreground text-lg">
              Quy định và hướng dẫn tham gia chương trình "100 Điều Thú Vị Du Lịch Đà Nẵng"
            </p>
          </motion.div>

          <div className="space-y-6">
            {rules.map((rule, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl p-6 shadow-card"
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{rule.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{rule.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Rules;
