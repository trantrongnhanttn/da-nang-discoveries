import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Send, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import NominationCard from "@/components/NominationCard";
import { CATEGORIES, SAMPLE_NOMINATIONS } from "@/lib/data";

const stepColors = [
  { gradient: "bg-gradient-ocean", icon: "text-primary-foreground" },
  { gradient: "bg-gradient-sunset", icon: "text-primary-foreground" },
  { gradient: "bg-gradient-purple", icon: "text-primary-foreground" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSlider />

      {/* Giới thiệu chung */}
      <section className="py-20 bg-gradient-section relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-secondary/5 blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium mb-4">
              Về chương trình
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              100 Điều Thú Vị <span className="text-gradient-primary">Du Lịch Đà Nẵng</span>
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
                className="bg-card rounded-xl p-8 shadow-card text-center relative overflow-hidden group hover:shadow-colorful transition-all hover:-translate-y-1"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                  i === 0 ? "from-cyan-400 to-blue-500" : i === 1 ? "from-orange-400 to-rose-500" : "from-purple-400 to-pink-500"
                }`} />
                <div className={`w-14 h-14 rounded-xl ${stepColors[i].gradient} flex items-center justify-center mx-auto mb-5 shadow-lg`}>
                  <item.icon className={stepColors[i].icon} size={24} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hạng mục */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              8 hạng mục
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Các hạng mục <span className="text-gradient-warm">đề cử</span>
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
              >
                <Link
                  to={`/danh-sach?category=${cat.id}`}
                  className={`block ${cat.gradient} rounded-xl p-6 shadow-card hover:shadow-colorful transition-all cursor-pointer hover:-translate-y-1 hover:scale-[1.02] text-center group relative overflow-hidden`}
                >
                  <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/10" />
                  <div className="absolute -bottom-2 -left-2 w-12 h-12 rounded-full bg-white/10" />
                  <span className="text-4xl mb-3 block drop-shadow-lg relative z-10">{cat.icon}</span>
                  <h3 className="font-display font-semibold text-white relative z-10">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-white/70 mt-1 relative z-10">{cat.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kêu gọi đề cử */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-shift" style={{ backgroundSize: "200% 200%" }} />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white blur-3xl animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-white blur-2xl animate-float" />
        </div>
        {/* Wave top */}
        <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,60 C360,0 720,40 1440,10 L1440,0 L0,0 Z" fill="hsl(var(--background))" />
        </svg>
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
              <Button variant="hero" size="lg" className="text-base px-8 shadow-lg">
                Gửi đề cử của bạn <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
        {/* Wave bottom */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,0 C360,50 720,10 1440,40 L1440,60 L0,60 Z" fill="hsl(var(--background))" />
        </svg>
      </section>

      {/* Danh sách đề cử */}
      <section className="py-20 bg-gradient-section relative overflow-hidden">
        {/* Decorative dots */}
        <div className="absolute top-10 right-10 grid grid-cols-5 gap-2 opacity-10">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary" />
          ))}
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Nổi bật
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Đề cử <span className="text-gradient-primary">nổi bật</span>
              </h2>
              <p className="text-muted-foreground text-lg">Những địa điểm được cộng đồng đề cử</p>
            </div>
            <Link to="/danh-sach" className="hidden md:flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all">
              Xem tất cả <ArrowRight size={16} />
            </Link>
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
