import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, User, Calendar, Tag, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CATEGORIES, SAMPLE_NOMINATIONS } from "@/lib/data";

const PlaceDetail = () => {
  const { id } = useParams();
  const nomination = SAMPLE_NOMINATIONS.find((n) => n.id === id);
  const category = nomination ? CATEGORIES.find((c) => c.id === nomination.category) : null;

  if (!nomination) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-20 container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Không tìm thấy địa điểm</h1>
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
        <div className={`absolute inset-0 ${category?.gradient || "bg-gradient-primary"}`} />
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 right-20 w-48 h-48 rounded-full bg-white blur-3xl animate-float" />
          <div className="absolute bottom-10 left-20 w-64 h-64 rounded-full bg-white blur-3xl animate-float-slow" />
        </div>
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,0 C360,50 720,10 1440,40 L1440,60 L0,60 Z" fill="hsl(var(--background))" />
        </svg>
        <div className="container mx-auto px-4 py-16 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-6">
              <Link to="/" className="hover:text-primary-foreground transition-colors">Trang chủ</Link>
              <ChevronRight size={14} />
              <Link to="/danh-sach" className="hover:text-primary-foreground transition-colors">Danh sách</Link>
              <ChevronRight size={14} />
              <span className="text-primary-foreground">{nomination.placeName}</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">{category?.icon}</span>
              <div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 text-primary-foreground text-sm font-medium backdrop-blur-sm">
                  {category?.name}
                </span>
              </div>
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              {nomination.placeName}
            </h1>
            <div className="flex flex-wrap gap-4 text-primary-foreground/80 text-sm">
              <span className="flex items-center gap-1.5"><MapPin size={15} /> {nomination.placeAddress}</span>
              <span className="flex items-center gap-1.5"><Calendar size={15} /> {new Date(nomination.createdAt).toLocaleDateString("vi-VN")}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="pb-20 -mt-4">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            {/* Info Card */}
            <div className="bg-card rounded-2xl shadow-colorful overflow-hidden">
              {/* Top gradient accent */}
              <div className={`h-1.5 bg-gradient-to-r ${category?.color || "from-primary to-primary"}`} />

              <div className="p-8">
                {/* Description */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-8 h-8 rounded-lg ${category?.gradient || "bg-gradient-primary"} flex items-center justify-center`}>
                      <Tag size={16} className="text-white" />
                    </div>
                    <h2 className="font-display text-xl font-semibold text-foreground">Mô tả</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line pl-11">{nomination.description}</p>
                </div>

                <div className="border-t border-border pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-sunset flex items-center justify-center">
                      <User size={16} className="text-white" />
                    </div>
                    <h2 className="font-display text-xl font-semibold text-foreground">Người đề cử</h2>
                  </div>
                  <div className="flex items-center gap-3 pl-11">
                    <div className={`w-10 h-10 rounded-full ${category?.gradient || "bg-gradient-primary"} flex items-center justify-center`}>
                      <User size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{nomination.fullName}</p>
                      <p className="text-sm text-muted-foreground">{nomination.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Back link */}
            <div className="mt-8 text-center">
              <Link to="/danh-sach">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft size={16} /> Quay lại danh sách
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PlaceDetail;
