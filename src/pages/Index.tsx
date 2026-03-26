import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Send, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import NominationCard from "@/components/NominationCard";
import { CATEGORIES, SAMPLE_NOMINATIONS } from "@/lib/data";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <HeroSlider />

      {/* Giới thiệu chung */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Về chương trình
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              100 Điều Thú Vị Du Lịch Đà Nẵng
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Chương trình tìm kiếm, tôn vinh và quảng bá 100 điểm đến, trải nghiệm, ẩm thực 
              và nét văn hóa thú vị nhất tại thành phố Đà Nẵng — thông qua sự đề cử và bình chọn 
              của cộng đồng yêu du lịch.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Send, title: "Đề cử", desc: "Gửi đề cử những điều thú vị bạn biết về Đà Nẵng" },
              { icon: Users, title: "Bình chọn", desc: "Cộng đồng cùng bình chọn cho các đề cử yêu thích" },
              { icon: Star, title: "Tôn vinh", desc: "Top 100 sẽ được công nhận và quảng bá rộng rãi" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-xl p-8 shadow-card text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-5">
                  <item.icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hạng mục */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Các hạng mục đề cử
            </h2>
            <p className="text-muted-foreground text-lg">Khám phá và đề cử theo từng chủ đề</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all cursor-pointer hover:-translate-y-1 text-center group"
              >
                <span className="text-4xl mb-3 block">{cat.icon}</span>
                <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{cat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kêu gọi đề cử */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary-foreground blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Bạn biết điều gì thú vị về Đà Nẵng?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Hãy đề cử những địa điểm, trải nghiệm, món ăn mà bạn yêu thích nhất. 
              Mỗi đề cử đều có cơ hội góp mặt trong Top 100!
            </p>
            <Link to="/de-cu">
              <Button variant="hero" size="lg" className="text-base px-8">
                Gửi đề cử của bạn <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Danh sách đề cử */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Đề cử nổi bật
              </h2>
              <p className="text-muted-foreground text-lg">Những địa điểm được cộng đồng đề cử</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAMPLE_NOMINATIONS.map((nom, i) => (
              <NominationCard key={nom.id} nomination={nom} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
