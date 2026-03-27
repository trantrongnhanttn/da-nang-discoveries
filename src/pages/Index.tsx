import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Send, Star, Users, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NominationCard from "@/components/NominationCard";
import { CATEGORIES, SAMPLE_NOMINATIONS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const stepItems = [
  { icon: Send, title: "Đề cử", desc: "Gửi đề cử những điều thú vị bạn biết về Đà Nẵng", accent: "from-cyan-400 to-blue-500" },
  { icon: Users, title: "Bình chọn", desc: "Cộng đồng cùng bình chọn cho các đề cử yêu thích", accent: "from-orange-400 to-rose-500" },
  { icon: Star, title: "Tôn vinh", desc: "Top 100 sẽ được công nhận và quảng bá rộng rãi", accent: "from-purple-400 to-pink-500" },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const nominationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero staggered fade-in
      gsap.from(heroRef.current?.querySelectorAll(".hero-anim") || [], {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // About section - slide in cards
      gsap.from(aboutRef.current?.querySelectorAll(".step-card") || [], {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
        x: -60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Categories - scale up
      gsap.from(categoriesRef.current?.querySelectorAll(".cat-card") || [], {
        scrollTrigger: {
          trigger: categoriesRef.current,
          start: "top 80%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "back.out(1.4)",
      });

      // CTA section
      gsap.from(ctaRef.current?.querySelectorAll(".cta-anim") || [], {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Nominations - stagger
      gsap.from(nominationsRef.current?.querySelectorAll(".nom-card") || [], {
        scrollTrigger: {
          trigger: nominationsRef.current,
          start: "top 80%",
        },
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
    <div className="min-h-screen bg-[#0a0a0f] text-white relative overflow-hidden">
      {/* Global radial gradient glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-purple-600/20 blur-[150px]" />
        <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-blue-500/15 blur-[140px]" />
        <div className="absolute top-[50%] left-[10%] w-[500px] h-[500px] rounded-full bg-pink-500/15 blur-[130px]" />
        <div className="absolute bottom-[-10%] right-[20%] w-[650px] h-[650px] rounded-full bg-teal-400/15 blur-[150px]" />
        <div className="absolute top-[30%] left-[50%] w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[120px]" />
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }} />
      </div>

      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative z-10 pt-32 pb-24 min-h-[85vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="hero-anim mb-6 bg-white/10 text-white/90 border-white/20 backdrop-blur-sm px-4 py-1.5 text-sm">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Chương trình du lịch Đà Nẵng
            </Badge>
            <h1 className="hero-anim font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Khám phá{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                100 điều thú vị
              </span>
              <br />Du lịch Đà Nẵng
            </h1>
            <p className="hero-anim text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              Hãy cùng tìm kiếm và tôn vinh những điều tuyệt vời nhất về thành phố đáng sống bên bờ biển.
            </p>
            <div className="hero-anim flex flex-wrap gap-4 justify-center">
              <Link to="/de-cu">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 border-0 text-white text-base px-8 shadow-lg shadow-purple-500/25">
                    Đề cử ngay <ArrowRight className="ml-2" size={18} />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/the-le">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 text-base px-8 backdrop-blur-sm">
                    Xem thể lệ
                  </Button>
                </motion.div>
              </Link>
            </div>

            {/* Pulsing status dot */}
            <motion.div
              className="hero-anim mt-12 flex items-center justify-center gap-2 text-sm text-white/50"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
              Đang nhận đề cử
            </motion.div>
          </div>
        </div>
      </section>

      <Separator className="bg-white/5 mx-auto max-w-5xl" />

      {/* Giới thiệu chung */}
      <section ref={aboutRef} className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white/80 border-white/10">
              Về chương trình
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              100 Điều Thú Vị{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Du Lịch Đà Nẵng
              </span>
            </h2>
            <p className="text-white/50 leading-relaxed text-lg">
              Chương trình tìm kiếm, tôn vinh và quảng bá 100 điểm đến, trải nghiệm, ẩm thực
              và nét văn hóa thú vị nhất tại thành phố Đà Nẵng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stepItems.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="step-card"
              >
                <Card className="bg-white/[0.05] backdrop-blur-xl border-white/10 h-full relative overflow-hidden group hover:bg-white/[0.08] transition-all duration-300">
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.accent}`} />
                  <CardHeader className="text-center pb-2">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                      <item.icon className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-white text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-white/50">{item.desc}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hạng mục */}
      <section ref={categoriesRef} className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white/80 border-white/10">
              6 hạng mục
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Các hạng mục{" "}
              <span className="bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">
                đề cử
              </span>
            </h2>
            <p className="text-white/50 text-lg">Khám phá và đề cử theo từng chủ đề</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.id}
                whileHover={{ y: -6, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="cat-card"
              >
                <Link to={`/hang-muc/${cat.id}`}>
                  <Card className={`${cat.gradient} border-0 cursor-pointer text-center relative overflow-hidden h-full`}>
                    <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/10" />
                    <div className="absolute -bottom-2 -left-2 w-12 h-12 rounded-full bg-white/10" />
                    <CardContent className="p-6 relative z-10">
                      <span className="text-4xl mb-3 block drop-shadow-lg">{cat.icon}</span>
                      <h3 className="font-display font-semibold text-white">{cat.name}</h3>
                      <p className="text-xs text-white/70 mt-1">{cat.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-white/5 mx-auto max-w-5xl" />

      {/* CTA Section */}
      <section ref={ctaRef} className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <Card className="bg-white/[0.05] backdrop-blur-xl border-white/10 overflow-hidden relative">
            {/* Inner glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-500/20 blur-[100px] rounded-full" />
            <CardContent className="py-16 px-8 text-center relative z-10">
              <h2 className="cta-anim font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Bạn biết điều gì thú vị về Đà Nẵng?
              </h2>
              <p className="cta-anim text-white/60 text-lg mb-8 max-w-xl mx-auto">
                Hãy đề cử những địa điểm, trải nghiệm, món ăn mà bạn yêu thích nhất.
                Mỗi đề cử đều có cơ hội góp mặt trong Top 100!
              </p>
              <div className="cta-anim">
                <Link to="/de-cu">
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
                    <Button size="lg" className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 border-0 text-white text-base px-10 shadow-lg shadow-purple-500/30">
                      Gửi đề cử của bạn <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Danh sách đề cử nổi bật */}
      <section ref={nominationsRef} className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <Badge variant="secondary" className="mb-4 bg-white/10 text-white/80 border-white/10">
                Nổi bật
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                Đề cử{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  nổi bật
                </span>
              </h2>
              <p className="text-white/50 text-lg">Những địa điểm được cộng đồng đề cử</p>
            </div>
            <Link to="/danh-sach" className="hidden md:flex items-center gap-1 text-purple-400 font-medium hover:gap-2 transition-all">
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
