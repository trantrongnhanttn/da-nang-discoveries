import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NominationCard from "@/components/NominationCard";
import { CATEGORIES, SAMPLE_NOMINATIONS } from "@/lib/data";

const CategoryDetail = () => {
  const { id } = useParams();
  const category = CATEGORIES.find((c) => c.id === id);
  const nominations = SAMPLE_NOMINATIONS.filter((n) => n.category === id);

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-20 container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Không tìm thấy hạng mục</h1>
          <Link to="/"><Button variant="default">Về trang chủ</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="pt-16 relative overflow-hidden">
        <div className={`absolute inset-0 ${category.gradient}`} />
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 right-20 w-56 h-56 rounded-full bg-white blur-3xl animate-float" />
          <div className="absolute bottom-10 left-20 w-72 h-72 rounded-full bg-white blur-3xl animate-float-slow" />
          <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-white blur-2xl animate-float" />
        </div>
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,0 C360,50 720,10 1440,40 L1440,60 L0,60 Z" fill="hsl(var(--background))" />
        </svg>
        <div className="container mx-auto px-4 py-20 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft size={16} /> Về trang chủ
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl drop-shadow-lg">{category.icon}</span>
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium backdrop-blur-sm mb-2">
                  Hạng mục đề cử
                </span>
                <h1 className="font-display text-3xl md:text-5xl font-bold text-white">
                  {category.name}
                </h1>
              </div>
            </div>
            <p className="text-white/85 text-lg max-w-3xl leading-relaxed">
              {category.fullDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Suggestions */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-section" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className={`inline-block px-4 py-1.5 rounded-full ${category.bgLight} ${category.textColor} text-sm font-medium mb-4`}>
              Gợi ý đề cử
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Các nội dung đề xuất
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {category.suggestions.map((suggestion, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all overflow-hidden"
              >
                <div className={`h-1.5 bg-gradient-to-r ${category.color}`} />
                <div className="p-6">
                  <h3 className={`font-display text-lg font-semibold ${category.textColor} mb-4`}>
                    {suggestion.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {suggestion.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className={`${category.textColor} flex-shrink-0 mt-0.5`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nominations in this category */}
      {nominations.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-end justify-between mb-10"
            >
              <div>
                <span className={`inline-block px-4 py-1.5 rounded-full ${category.bgLight} ${category.textColor} text-sm font-medium mb-3`}>
                  {nominations.length} đề cử
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  Đề cử trong hạng mục
                </h2>
              </div>
              <Link to="/de-cu" className="hidden md:flex">
                <Button variant="hero" className="gap-2">
                  Đề cử thêm <ArrowRight size={16} />
                </Button>
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nominations.map((nom, i) => (
                <NominationCard key={nom.id} nomination={nom} index={i} />
              ))}
            </div>

            <div className="md:hidden mt-8 text-center">
              <Link to="/de-cu">
                <Button variant="hero" className="gap-2">
                  Đề cử thêm <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className={`absolute inset-0 ${category.gradient} opacity-90`} />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 left-20 w-40 h-40 rounded-full bg-white blur-3xl animate-float" />
          <div className="absolute bottom-5 right-20 w-56 h-56 rounded-full bg-white blur-3xl animate-float-slow" />
        </div>
        <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,60 C360,0 720,40 1440,10 L1440,0 L0,0 Z" fill="hsl(var(--background))" />
        </svg>
        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
              Bạn biết thêm điều thú vị nào?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Hãy đề cử những địa điểm, trải nghiệm thuộc hạng mục "{category.name}" mà bạn yêu thích!
            </p>
            <Link to="/de-cu">
              <Button variant="hero" size="lg" className="shadow-lg">
                Gửi đề cử ngay <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryDetail;
