import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SAMPLE_NEWS } from "@/lib/data";

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Tin tức
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tin tức & Cập nhật
            </h1>
            <p className="text-muted-foreground text-lg">
              Theo dõi thông tin mới nhất về chương trình
            </p>
          </motion.div>

          <div className="space-y-6">
            {SAMPLE_NEWS.map((news, i) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all cursor-pointer group"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-48 bg-gradient-primary flex items-center justify-center p-6">
                    <span className="text-primary-foreground font-display text-lg font-bold text-center">
                      {news.category}
                    </span>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Calendar size={12} />
                      {new Date(news.date).toLocaleDateString("vi-VN")}
                    </div>
                    <h2 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {news.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">{news.excerpt}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default News;
