import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, User, Calendar, Tag } from "lucide-react";
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
          <Link to="/">
            <Button variant="default">Về trang chủ</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} /> Quay lại trang chủ
          </Link>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            {/* Hero */}
            <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-gradient-primary relative mb-8">
              <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-20">
                {category?.icon}
              </div>
              <div className="absolute bottom-6 left-6">
                <span className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm text-sm font-medium text-foreground">
                  {category?.icon} {category?.name}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {nomination.placeName}
              </h1>

              <div className="flex flex-wrap gap-4 mb-8 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><MapPin size={15} /> {nomination.placeAddress}</span>
                <span className="flex items-center gap-1.5"><Tag size={15} /> {category?.name}</span>
                <span className="flex items-center gap-1.5"><Calendar size={15} /> {new Date(nomination.createdAt).toLocaleDateString("vi-VN")}</span>
              </div>

              <div className="border-t border-border pt-6 mb-8">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">Mô tả</h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{nomination.description}</p>
              </div>

              <div className="border-t border-border pt-6">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">Người đề cử</h2>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <User size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{nomination.fullName}</p>
                    <p className="text-sm text-muted-foreground">{nomination.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PlaceDetail;
