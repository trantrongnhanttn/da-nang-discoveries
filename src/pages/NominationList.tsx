import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, Grid3X3, List } from "lucide-react";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NominationCard from "@/components/NominationCard";
import { CATEGORIES, SAMPLE_NOMINATIONS } from "@/lib/data";

const NominationList = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filtered = SAMPLE_NOMINATIONS.filter((nom) => {
    const matchCategory = !activeCategory || nom.category === activeCategory;
    const matchSearch =
      !searchQuery ||
      nom.placeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      nom.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      nom.placeAddress.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const activeCount = (catId: string) =>
    SAMPLE_NOMINATIONS.filter((n) => n.category === catId).length;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="pt-16 bg-gradient-primary">
        <div className="container mx-auto px-4 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Danh sách đề cử
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Khám phá tất cả các địa điểm, trải nghiệm thú vị đã được cộng đồng đề cử
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Showcase */}
      <section className="py-12 bg-gradient-section">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-2xl font-bold text-foreground mb-8 text-center"
          >
            Chọn hạng mục
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {CATEGORIES.map((cat, i) => {
              const isActive = activeCategory === cat.id;
              const count = activeCount(cat.id);
              return (
                <motion.button
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setActiveCategory(isActive ? null : cat.id)}
                  className={`relative flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-300 group ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg scale-105"
                      : "bg-card shadow-card hover:shadow-card-hover hover:-translate-y-1"
                  }`}
                >
                  <span className="text-3xl mb-1 transition-transform group-hover:scale-110">
                    {cat.icon}
                  </span>
                  <span className={`text-xs font-semibold text-center leading-tight ${isActive ? "text-primary-foreground" : "text-foreground"}`}>
                    {cat.name}
                  </span>
                  <span
                    className={`inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[10px] font-bold ${
                      isActive
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filter Bar & Results */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Search & Controls */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8"
          >
            <div className="relative flex-1">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm địa điểm, mô tả..."
                className="pl-10"
              />
            </div>

            <div className="flex items-center gap-2">
              {activeCategory && (
                <button
                  onClick={() => setActiveCategory(null)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                >
                  <SlidersHorizontal size={14} />
                  {CATEGORIES.find((c) => c.id === activeCategory)?.icon}{" "}
                  {CATEGORIES.find((c) => c.id === activeCategory)?.name}
                  <span className="ml-1 text-xs opacity-60">✕</span>
                </button>
              )}

              <div className="flex items-center bg-muted rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-colors ${viewMode === "grid" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"}`}
                >
                  <Grid3X3 size={16} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-colors ${viewMode === "list" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"}`}
                >
                  <List size={16} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Results count */}
          <p className="text-sm text-muted-foreground mb-6">
            Hiển thị <span className="font-semibold text-foreground">{filtered.length}</span> đề cử
            {activeCategory && (
              <> trong hạng mục <span className="font-semibold text-primary">{CATEGORIES.find((c) => c.id === activeCategory)?.name}</span></>
            )}
          </p>

          {/* Grid / List */}
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={`${activeCategory}-${searchQuery}-${viewMode}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "flex flex-col gap-4"
                }
              >
                {filtered.map((nom, i) =>
                  viewMode === "grid" ? (
                    <NominationCard key={nom.id} nomination={nom} index={i} />
                  ) : (
                    <NominationListItem key={nom.id} nomination={nom} index={i} />
                  )
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <span className="text-6xl mb-4 block">🔍</span>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Không tìm thấy kết quả
                </h3>
                <p className="text-muted-foreground">
                  Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// List view item
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import type { Nomination } from "@/lib/data";

const NominationListItem = ({ nomination, index }: { nomination: Nomination; index: number }) => {
  const category = CATEGORIES.find((c) => c.id === nomination.category);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <Link
        to={`/dia-diem/${nomination.id}`}
        className="group flex items-center gap-5 bg-card rounded-xl p-4 shadow-card hover:shadow-card-hover transition-all"
      >
        <div className="w-20 h-20 rounded-xl bg-gradient-primary flex-shrink-0 flex items-center justify-center text-3xl opacity-60">
          {category?.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
              {category?.name}
            </span>
          </div>
          <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors truncate">
            {nomination.placeName}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
            <MapPin size={12} />
            <span className="truncate">{nomination.placeAddress}</span>
          </div>
        </div>
        <p className="hidden lg:block flex-1 text-sm text-muted-foreground line-clamp-2 max-w-xs">
          {nomination.description}
        </p>
      </Link>
    </motion.div>
  );
};

export default NominationList;
