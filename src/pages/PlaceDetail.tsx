import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, MapPin, User, Calendar, Tag, ChevronRight, Phone, Mail,
  Home, Camera, ChevronLeft, X, Share2, Heart, ImageOff
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CATEGORIES, SAMPLE_NOMINATIONS } from "@/lib/data";

const PlaceDetail = () => {
  const { id } = useParams();
  const nomination = SAMPLE_NOMINATIONS.find((n) => n.id === id);
  const category = nomination ? CATEGORIES.find((c) => c.id === nomination.category) : null;
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  // Related nominations in same category
  const related = nomination
    ? SAMPLE_NOMINATIONS.filter((n) => n.category === nomination.category && n.id !== nomination.id).slice(0, 3)
    : [];

  if (!nomination) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-20 container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <ImageOff className="mx-auto mb-4 text-muted-foreground" size={64} />
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">Không tìm thấy địa điểm</h1>
            <p className="text-muted-foreground mb-6">Địa điểm bạn tìm kiếm không tồn tại hoặc đã bị xóa.</p>
            <Link to="/danh-sach"><Button variant="hero">Xem danh sách đề cử</Button></Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const hasImages = nomination.images && nomination.images.length > 0;
  const placeholderImages = [
    `https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80`,
    `https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80`,
    `https://images.unsplash.com/photo-1571984405176-5958bd9ac31d?w=800&q=80`,
  ];
  const displayImages = hasImages ? nomination.images : placeholderImages;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero with image gallery */}
      <section className="pt-16 relative">
        {/* Main hero image */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-muted">
          <motion.img
            key={selectedImage}
            src={displayImages[selectedImage]}
            alt={nomination.placeName}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Category badge top-left */}
          <div className="absolute top-4 left-4 z-10">
            <Badge className={`${category?.gradient || "bg-gradient-primary"} text-primary-foreground border-none text-sm px-3 py-1.5 shadow-lg backdrop-blur-sm`}>
              <span className="mr-1.5">{category?.icon}</span>
              {category?.name}
            </Badge>
          </div>

          {/* Action buttons top-right */}
          <div className="absolute top-4 right-4 z-10 flex gap-2">
            <button
              onClick={() => setLiked(!liked)}
              className={`w-10 h-10 rounded-full backdrop-blur-md flex items-center justify-center transition-all shadow-lg ${
                liked ? "bg-destructive text-destructive-foreground" : "bg-black/30 text-white hover:bg-black/50"
              }`}
            >
              <Heart size={18} fill={liked ? "currentColor" : "none"} />
            </button>
            <button
              onClick={() => navigator.clipboard?.writeText(window.location.href)}
              className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-black/50 flex items-center justify-center transition-all shadow-lg"
            >
              <Share2 size={18} />
            </button>
          </div>

          {/* Image navigation arrows */}
          {displayImages.length > 1 && (
            <>
              <button
                onClick={() => setSelectedImage((prev) => (prev - 1 + displayImages.length) % displayImages.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-black/50 flex items-center justify-center transition-all z-10"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setSelectedImage((prev) => (prev + 1) % displayImages.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-black/50 flex items-center justify-center transition-all z-10"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Bottom info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="container mx-auto max-w-5xl">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
                <Link to="/" className="hover:text-white transition-colors">Trang chủ</Link>
                <ChevronRight size={14} />
                <Link to="/danh-sach" className="hover:text-white transition-colors">Danh sách</Link>
                <ChevronRight size={14} />
                <span className="text-white/90">{nomination.placeName}</span>
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
                {nomination.placeName}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1.5">
                  <MapPin size={15} /> {nomination.placeAddress}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={15} /> {new Date(nomination.createdAt).toLocaleDateString("vi-VN", { day: "2-digit", month: "long", year: "numeric" })}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail strip */}
        {displayImages.length > 1 && (
          <div className="container mx-auto max-w-5xl px-4">
            <div className="flex gap-2 -mt-8 relative z-10 overflow-x-auto pb-2">
              {displayImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => { setSelectedImage(i); }}
                  className={`flex-shrink-0 w-20 h-14 md:w-24 md:h-16 rounded-lg overflow-hidden transition-all shadow-lg ${
                    selectedImage === i
                      ? "ring-3 ring-primary scale-105"
                      : "ring-2 ring-white/50 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt={`Ảnh ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
              <button
                onClick={() => setLightboxOpen(true)}
                className="flex-shrink-0 w-20 h-14 md:w-24 md:h-16 rounded-lg bg-card border-2 border-border flex items-center justify-center gap-1 text-muted-foreground hover:text-foreground hover:bg-muted transition-all shadow-lg"
              >
                <Camera size={16} />
                <span className="text-xs font-medium">{displayImages.length}</span>
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Content */}
      <div className="py-10 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                {/* Description */}
                <Card className="bg-card border-border shadow-card overflow-hidden">
                  <div className={`h-1 bg-gradient-to-r ${category?.color || "from-primary to-primary"}`} />
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-10 h-10 rounded-xl ${category?.gradient || "bg-gradient-primary"} flex items-center justify-center shadow-md`}>
                        <Tag size={18} className="text-white" />
                      </div>
                      <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground">Giới thiệu</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-base whitespace-pre-line">
                      {nomination.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Location info */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <Card className="bg-card border-border shadow-card overflow-hidden">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-gradient-tropical flex items-center justify-center shadow-md">
                        <MapPin size={18} className="text-white" />
                      </div>
                      <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground">Vị trí</h2>
                    </div>
                    <div className="bg-muted/50 rounded-xl p-5 border border-border">
                      <div className="flex items-start gap-3">
                        <MapPin className="text-primary mt-0.5 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-medium text-foreground text-base">{nomination.placeName}</p>
                          <p className="text-muted-foreground mt-1">{nomination.placeAddress}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Related nominations */}
              {related.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    Đề cử cùng hạng mục
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {related.map((item) => (
                      <Link key={item.id} to={`/dia-diem/${item.id}`}>
                        <Card className="bg-card border-border shadow-card hover:shadow-colorful transition-all duration-300 group overflow-hidden h-full">
                          <div className={`h-1 bg-gradient-to-r ${category?.color}`} />
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-lg">{category?.icon}</span>
                              <p className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                                {item.placeName}
                              </p>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                            <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
                              <MapPin size={12} />
                              <span className="line-clamp-1">{item.placeAddress}</span>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Nominator info */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <Card className="bg-card border-border shadow-card overflow-hidden">
                  <div className="h-1 bg-gradient-sunset" />
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-gradient-sunset flex items-center justify-center shadow-md">
                        <User size={18} className="text-white" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground">Người đề cử</h3>
                    </div>

                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-12 h-12 rounded-full ${category?.gradient || "bg-gradient-primary"} flex items-center justify-center shadow-md`}>
                        <span className="text-white font-bold text-lg">
                          {nomination.fullName.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{nomination.fullName}</p>
                        <p className="text-xs text-muted-foreground">
                          Đề cử ngày {new Date(nomination.createdAt).toLocaleDateString("vi-VN")}
                        </p>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                          <Mail size={14} className="text-muted-foreground" />
                        </div>
                        <span className="text-muted-foreground">{nomination.email}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                          <Phone size={14} className="text-muted-foreground" />
                        </div>
                        <span className="text-muted-foreground">{nomination.phone}</span>
                      </div>
                      {nomination.address && (
                        <div className="flex items-center gap-3 text-sm">
                          <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                            <Home size={14} className="text-muted-foreground" />
                          </div>
                          <span className="text-muted-foreground">{nomination.address}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Category card */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <Link to={`/hang-muc/${category?.id}`}>
                  <Card className={`overflow-hidden shadow-card hover:shadow-colorful transition-all duration-300 group border-border`}>
                    <div className={`${category?.gradient || "bg-gradient-primary"} p-6 text-center`}>
                      <span className="text-4xl block mb-2">{category?.icon}</span>
                      <h3 className="font-display text-lg font-bold text-primary-foreground">{category?.name}</h3>
                      <p className="text-primary-foreground/80 text-sm mt-1">{category?.description}</p>
                    </div>
                    <CardContent className="p-4 text-center">
                      <span className="text-sm text-primary font-medium group-hover:underline">
                        Xem tất cả đề cử →
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              {/* CTA */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Card className="bg-card border-border shadow-card">
                  <CardContent className="p-6 text-center">
                    <p className="text-muted-foreground text-sm mb-4">
                      Bạn cũng biết những điều thú vị về Đà Nẵng?
                    </p>
                    <Link to="/de-cu">
                      <Button variant="hero" className="w-full">
                        Gửi đề cử ngay
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Back */}
              <Link to="/danh-sach">
                <Button variant="outline" className="w-full gap-2">
                  <ArrowLeft size={16} /> Quay lại danh sách
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center z-50"
            >
              <X size={20} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedImage((prev) => (prev - 1 + displayImages.length) % displayImages.length); }}
              className="absolute left-4 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center"
            >
              <ChevronLeft size={24} />
            </button>
            <motion.img
              key={selectedImage}
              src={displayImages[selectedImage]}
              alt={`Ảnh ${selectedImage + 1}`}
              className="max-w-full max-h-[85vh] rounded-lg object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedImage((prev) => (prev + 1) % displayImages.length); }}
              className="absolute right-4 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center"
            >
              <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-6 text-white/60 text-sm">
              {selectedImage + 1} / {displayImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default PlaceDetail;
