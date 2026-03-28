import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Send, Star, Users, MapPin, Compass, Palmtree, UtensilsCrossed, Camera, Mountain, Heart, PartyPopper, Rocket, Vote, Megaphone, CheckCircle2, ClipboardList, ThumbsUp, LayoutGrid, Target } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import NominationCard from "@/components/NominationCard";
import { CATEGORIES, SAMPLE_NOMINATIONS } from "@/lib/data";
import travelPattern from "@/assets/travel-pattern.jpg";

gsap.registerPlugin(ScrollTrigger);

const stepItems = [
  { icon: Send, title: "Đề cử", desc: "Gửi đề cử những điều thú vị bạn biết về Đà Nẵng", color: "from-cyan-400 to-blue-500" },
  { icon: Users, title: "Bình chọn", desc: "Cộng đồng cùng bình chọn cho các đề cử yêu thích", color: "from-orange-400 to-rose-500" },
  { icon: Star, title: "Tôn vinh", desc: "Top 100 sẽ được công nhận và quảng bá rộng rãi", color: "from-purple-400 to-pink-500" },
];

const categoryIcons = [Compass, UtensilsCrossed, Mountain, Heart, PartyPopper, Camera];

const Index = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const nominationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // About section - slide in cards
      gsap.from(aboutRef.current?.querySelectorAll(".step-card") || [], {
        scrollTrigger: { trigger: aboutRef.current, start: "top 80%" },
        x: -60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Categories - scale up
      gsap.from(categoriesRef.current?.querySelectorAll(".cat-card") || [], {
        scrollTrigger: { trigger: categoriesRef.current, start: "top 80%" },
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "back.out(1.4)",
      });

      // CTA section
      gsap.from(ctaRef.current?.querySelectorAll(".cta-anim") || [], {
        scrollTrigger: { trigger: ctaRef.current, start: "top 80%" },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Nominations
      gsap.from(nominationsRef.current?.querySelectorAll(".nom-card") || [], {
        scrollTrigger: { trigger: nominationsRef.current, start: "top 80%" },
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSlider />

      {/* Giới thiệu chung - Travel pattern background */}
      <section ref={aboutRef} className="py-20 relative overflow-hidden">
        {/* Travel pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
          style={{ backgroundImage: `url(${travelPattern})`, backgroundSize: "300px", backgroundRepeat: "repeat" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.03] to-background" />

        {/* Floating travel icons */}
        <div className="absolute top-16 left-[8%] text-primary/10 animate-float">
          <Compass size={48} />
        </div>
        <div className="absolute top-32 right-[12%] text-secondary/10 animate-float-slow">
          <Palmtree size={40} />
        </div>
        <div className="absolute bottom-20 left-[15%] text-accent/10 animate-float">
          <Camera size={36} />
        </div>
        <div className="absolute bottom-16 right-[8%] text-primary/10 animate-float-slow">
          <MapPin size={44} />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Về chương trình
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              100 Điều Thú Vị <span className="text-gradient-primary">Du Lịch Đà Nẵng</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Chương trình tìm kiếm, tôn vinh và quảng bá 100 điểm đến, trải nghiệm, ẩm thực
              và nét văn hóa thú vị nhất tại thành phố Đà Nẵng — thông qua sự đề cử và bình chọn
              của cộng đồng yêu du lịch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stepItems.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="step-card"
              >
                <Card className="bg-card/80 backdrop-blur-sm border-border shadow-card hover:shadow-colorful transition-all duration-300 h-full relative overflow-hidden group">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                  <CardHeader className="text-center pb-2">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                      <item.icon className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-foreground text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-muted-foreground">{item.desc}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lộ Trình Chương Trình */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-background to-secondary/[0.04]" />
        {/* Decorative travel icons */}
        <div className="absolute top-20 right-[6%] text-primary/8 animate-float-slow">
          <Compass size={50} />
        </div>
        <div className="absolute bottom-16 left-[6%] text-secondary/8 animate-float">
          <MapPin size={42} />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Lộ trình
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Lộ Trình <span className="text-gradient-primary">Chương Trình</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              3 giai đoạn triển khai trong năm 2026
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-px" />

            {/* Phase 1 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative flex flex-col md:flex-row items-start md:items-center mb-16 group"
            >
              {/* Content - Left side on desktop */}
              <div className="md:w-1/2 md:pr-12 md:text-right pl-16 md:pl-0 order-2 md:order-1">
                <Card className="bg-card/80 backdrop-blur-sm border-border shadow-card hover:shadow-colorful transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 md:justify-end mb-2">
                      <Rocket className="text-primary" size={18} />
                      <span className="text-sm font-semibold text-primary">Tháng 04/2026</span>
                    </div>
                    <CardTitle className="text-foreground text-xl mb-3">Phát động & Đề xuất</CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      Cá nhân, tổ chức đề xuất các "điểm chạm" theo 6 nhóm nội dung trên website chương trình.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              {/* Number circle */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 order-1 md:order-2">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/30"
                >
                  1
                </motion.div>
              </div>

              {/* Empty right side on desktop */}
              <div className="md:w-1/2 md:pl-12 order-3 hidden md:block" />
            </motion.div>

            {/* Phase 2 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="relative flex flex-col md:flex-row items-start md:items-center mb-16 group"
            >
              {/* Empty left side on desktop */}
              <div className="md:w-1/2 md:pr-12 order-1 hidden md:block" />

              {/* Number circle */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 order-1 md:order-2">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-secondary/30"
                >
                  2
                </motion.div>
              </div>

              {/* Content - Right side on desktop */}
              <div className="md:w-1/2 md:pl-12 pl-16 order-2 md:order-3">
                <Card className="bg-card/80 backdrop-blur-sm border-border shadow-card hover:shadow-colorful transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-rose-500" />
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Vote className="text-secondary" size={18} />
                      <span className="text-sm font-semibold text-secondary">Tháng 05–06/2026</span>
                    </div>
                    <CardTitle className="text-foreground text-xl mb-3">Bình chọn cộng đồng</CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      Bình chọn công khai trên website. Mỗi email được bình chọn cho nhiều điểm chạm, xác thực qua OTP.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Phase 3 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="relative flex flex-col md:flex-row items-start md:items-center group"
            >
              {/* Content - Left side on desktop */}
              <div className="md:w-1/2 md:pr-12 md:text-right pl-16 md:pl-0 order-2 md:order-1">
                <Card className="bg-card/80 backdrop-blur-sm border-border shadow-card hover:shadow-colorful transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500" />
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 md:justify-end mb-2">
                      <Megaphone className="text-accent" size={18} />
                      <span className="text-sm font-semibold text-accent">Tháng 06–07/2026</span>
                    </div>
                    <CardTitle className="text-foreground text-xl mb-3">Công bố & Truyền thông</CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      Công bố chính thức "Top 100 điểm Chạm Đà Nẵng" theo nhóm chủ đề, không xếp hạng thứ tự.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              {/* Number circle */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 order-1 md:order-2">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-accent/30"
                >
                  3
                </motion.div>
              </div>

              {/* Checkmark finale */}
              <div className="md:w-1/2 md:pl-12 order-3 hidden md:flex items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                >
                  <CheckCircle2 className="text-accent/30" size={48} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-5xl" />

      {/* Hạng mục - with travel icons */}
      <section ref={categoriesRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-section" />
        {/* Decorative travel shapes */}
        <div className="absolute top-10 right-[5%] text-secondary/8 animate-float">
          <UtensilsCrossed size={56} />
        </div>
        <div className="absolute bottom-10 left-[5%] text-primary/8 animate-float-slow">
          <Mountain size={52} />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              6 hạng mục
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Các hạng mục <span className="text-gradient-warm">đề cử</span>
            </h2>
            <p className="text-muted-foreground text-lg">Khám phá và đề cử theo từng chủ đề</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {CATEGORIES.map((cat, i) => {
              const IconComp = categoryIcons[i] || Compass;
              return (
                <motion.div
                  key={cat.id}
                  whileHover={{ y: -6, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="cat-card"
                >
                  <Link to={`/hang-muc/${cat.id}`}>
                    <Card className={`${cat.gradient} border-0 cursor-pointer text-center relative overflow-hidden h-full shadow-card hover:shadow-colorful transition-all`}>
                      {/* Travel icon watermark */}
                      <div className="absolute top-2 right-2 text-white/10">
                        <IconComp size={48} />
                      </div>
                      <div className="absolute -bottom-2 -left-2 w-12 h-12 rounded-full bg-white/10" />
                      <CardContent className="p-6 relative z-10">
                        <span className="text-4xl mb-3 block drop-shadow-lg">{cat.icon}</span>
                        <h3 className="font-display font-semibold text-white">{cat.name}</h3>
                        <p className="text-xs text-white/70 mt-1">{cat.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - travel themed */}
      <section ref={ctaRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-shift" style={{ backgroundSize: "200% 200%" }} />
        {/* Travel pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: `url(${travelPattern})`, backgroundSize: "250px", backgroundRepeat: "repeat" }}
        />
        {/* Floating icons */}
        <div className="absolute top-8 left-[10%] text-white/15 animate-float">
          <Palmtree size={40} />
        </div>
        <div className="absolute bottom-12 right-[10%] text-white/15 animate-float-slow">
          <MapPin size={36} />
        </div>
        <div className="absolute top-1/2 right-[25%] text-white/10 animate-float">
          <Star size={28} />
        </div>
        {/* Waves */}
        <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,60 C360,0 720,40 1440,10 L1440,0 L0,0 Z" fill="hsl(var(--background))" />
        </svg>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="cta-anim font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Bạn biết điều gì thú vị về Đà Nẵng?
            </h2>
            <p className="cta-anim text-primary-foreground/80 text-lg mb-8">
              Hãy đề cử những địa điểm, trải nghiệm, món ăn mà bạn yêu thích nhất.
              Mỗi đề cử đều có cơ hội góp mặt trong Top 100!
            </p>
            <div className="cta-anim">
              <Link to="/de-cu">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
                  <Button variant="hero" size="lg" className="text-base px-8 shadow-lg">
                    Gửi đề cử của bạn <ArrowRight className="ml-2" size={18} />
                  </Button>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,0 C360,50 720,10 1440,40 L1440,60 L0,60 Z" fill="hsl(var(--background))" />
        </svg>
      </section>

      {/* Đề cử nổi bật - travel pattern background */}
      <section ref={nominationsRef} className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{ backgroundImage: `url(${travelPattern})`, backgroundSize: "300px", backgroundRepeat: "repeat" }}
        />
        <div className="absolute inset-0 bg-gradient-section" />
        {/* Decorative dots pattern */}
        <div className="absolute top-10 right-10 grid grid-cols-5 gap-2 opacity-10">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary" />
          ))}
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="flex items-end justify-between mb-12">
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                ⭐ Nổi bật
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Đề cử <span className="text-gradient-primary">nổi bật</span>
              </h2>
              <p className="text-muted-foreground text-lg">Những địa điểm được cộng đồng đề cử</p>
            </div>
            <Link to="/danh-sach" className="hidden md:flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all">
              Xem tất cả <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAMPLE_NOMINATIONS.map((nom, i) => (
              <div key={nom.id} className="nom-card">
                <NominationCard nomination={nom} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
