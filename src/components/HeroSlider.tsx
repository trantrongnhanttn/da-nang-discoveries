import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    title: "Khám phá 100 điều thú vị",
    subtitle: "Du lịch Đà Nẵng",
    description: "Hãy cùng tìm kiếm và tôn vinh những điều tuyệt vời nhất về thành phố đáng sống bên bờ biển.",
  },
  {
    image: hero2,
    title: "Cầu Vàng Bà Nà Hills",
    subtitle: "Kỳ quan kiến trúc",
    description: "Biểu tượng du lịch nổi tiếng thế giới của Đà Nẵng, nơi hội tụ thiên nhiên và nghệ thuật.",
  },
  {
    image: hero3,
    title: "Bãi biển Mỹ Khê",
    subtitle: "Thiên đường nghỉ dưỡng",
    description: "Một trong những bãi biển quyến rũ nhất hành tinh theo bình chọn của Forbes.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => setCurrent(index);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            key={`text-${current}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/90 text-secondary-foreground text-sm font-medium mb-4">
              {slides[current].subtitle}
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
              {slides[current].title}
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
              {slides[current].description}
            </p>
            <div className="flex gap-4">
              <Link to="/de-cu">
                <Button variant="hero" size="lg">Đề cử ngay</Button>
              </Link>
              <Link to="/the-le">
                <Button variant="outline" size="lg" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
                  Xem thể lệ
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/30 transition-colors">
        <ChevronLeft size={24} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/30 transition-colors">
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-secondary w-8" : "bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
