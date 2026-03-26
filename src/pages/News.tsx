import { motion } from "framer-motion";
import { Calendar, Newspaper } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SAMPLE_NEWS } from "@/lib/data";

const newsColors: Record<string, { gradient: string; bg: string; text: string }> = {
  "Sự kiện": { gradient: "bg-gradient-sunset", bg: "bg-orange-50", text: "text-orange-600" },
  "Tin tức": { gradient: "bg-gradient-ocean", bg: "bg-blue-50", text: "text-blue-600" },
  "Cập nhật": { gradient: "bg-gradient-tropical", bg: "bg-emerald-50", text: "text-emerald-600" },
  "Thông báo": { gradient: "bg-gradient-purple", bg: "bg-purple-50", text: "text-purple-600" },
};

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="pt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 animate-gradient-shift" style={{ backgroundSize: "200% 200%" }} />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-8 right-20 w-48 h-48 rounded-full bg-white blur-3xl animate-float" />
          <div className="absolute bottom-8 left-20 w-40 h-40 rounded-full bg-white blur-3xl animate-float-slow" />
        </div>
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,0 C360,50 720,10 1440,40 L1440,60 L0,60 Z" fill="hsl(var(--background))" />
        </svg>
        <div className="container mx-auto px-4 py-16 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-4 backdrop-blur-sm">
              <Newspaper size={14} /> Tin tức
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
              Tin tức & Cập nhật
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Theo dõi thông tin mới nhất về chương trình
            </p>
          </motion.div>
        </div>
      </section>

      <div className="pb-20 -mt-4">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Featured first article */}
          {SAMPLE_NEWS.length > 0 && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-2xl overflow-hidden shadow-colorful mb-8 group cursor-pointer hover:shadow-lg transition-all"
            >
              <div className={`${newsColors[SAMPLE_NEWS[0].category]?.gradient || "bg-gradient-primary"} p-8 relative overflow-hidden`}>
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/10" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-white/10" />
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium backdrop-blur-sm mb-4">
                  ⭐ Nổi bật
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3 group-hover:opacity-90 transition-opacity">
                  {SAMPLE_NEWS[0].title}
                </h2>
                <p className="text-white/80">{SAMPLE_NEWS[0].excerpt}</p>
                <div className="flex items-center gap-2 text-white/60 text-sm mt-4">
                  <Calendar size={14} />
                  {new Date(SAMPLE_NEWS[0].date).toLocaleDateString("vi-VN")}
                </div>
              </div>
            </motion.article>
          )}

          <div className="space-y-4">
            {SAMPLE_NEWS.slice(1).map((news, i) => {
              const color = newsColors[news.category] || newsColors["Tin tức"];
              return (
                <motion.article
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (i + 1) * 0.1 }}
                  className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all cursor-pointer group"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className={`md:w-48 ${color.gradient} flex items-center justify-center p-6 relative overflow-hidden`}>
                      <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-white/10" />
                      <span className="text-white font-display text-lg font-bold text-center relative z-10">
                        {news.category}
                      </span>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-xs px-2.5 py-0.5 rounded-full ${color.bg} ${color.text} font-medium`}>
                          {news.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar size={12} />
                          {new Date(news.date).toLocaleDateString("vi-VN")}
                        </span>
                      </div>
                      <h2 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {news.title}
                      </h2>
                      <p className="text-sm text-muted-foreground">{news.excerpt}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default News;
