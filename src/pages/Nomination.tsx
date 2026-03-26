import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Upload, X, Send, User, MapPin, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CATEGORIES } from "@/lib/data";

const Nomination = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [images, setImages] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    fullName: "", phone: "", email: "", address: "",
    description: "", category: "", placeName: "", placeAddress: "",
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    if (images.length + files.length > 5) {
      toast({ title: "Tối đa 5 hình ảnh", variant: "destructive" });
      return;
    }
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (ev.target?.result) setImages((prev) => [...prev, ev.target!.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => setImages((prev) => prev.filter((_, i) => i !== index));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Gửi đề cử thành công!", description: "Cảm ơn bạn đã đề cử. Chúng tôi sẽ xem xét trong thời gian sớm nhất." });
    navigate("/");
  };

  const updateField = (field: string, value: string) => setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="pt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary animate-gradient-shift" style={{ backgroundSize: "200% 200%" }} />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-40 h-40 rounded-full bg-white blur-3xl animate-float" />
          <div className="absolute bottom-5 left-10 w-32 h-32 rounded-full bg-white blur-2xl animate-float-slow" />
        </div>
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,0 C360,50 720,10 1440,40 L1440,60 L0,60 Z" fill="hsl(var(--background))" />
        </svg>
        <div className="container mx-auto px-4 py-16 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-primary-foreground text-sm font-medium mb-4 backdrop-blur-sm">
              ✨ Đề cử
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Gửi đề cử của bạn
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Chia sẻ những điều thú vị bạn biết về Đà Nẵng
            </p>
          </motion.div>
        </div>
      </section>

      <div className="pb-20 -mt-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 shadow-colorful space-y-8 relative overflow-hidden"
          >
            {/* Section: Người đề cử */}
            <div className="relative">
              <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-primary/20">
                <div className="w-8 h-8 rounded-lg bg-gradient-ocean flex items-center justify-center">
                  <User size={16} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Thông tin người đề cử
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Họ tên *</label>
                  <Input required value={formData.fullName} onChange={(e) => updateField("fullName", e.target.value)} placeholder="Nguyễn Văn A" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Điện thoại *</label>
                  <Input required type="tel" value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="0901234567" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                  <Input required type="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Địa chỉ</label>
                  <Input value={formData.address} onChange={(e) => updateField("address", e.target.value)} placeholder="Địa chỉ của bạn" />
                </div>
              </div>
            </div>

            {/* Section: Địa điểm */}
            <div className="relative">
              <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-secondary/20">
                <div className="w-8 h-8 rounded-lg bg-gradient-sunset flex items-center justify-center">
                  <MapPin size={16} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Thông tin địa điểm đề cử
                </h3>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Tên địa điểm *</label>
                    <Input required value={formData.placeName} onChange={(e) => updateField("placeName", e.target.value)} placeholder="Tên gọi địa điểm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Hạng mục *</label>
                    <Select value={formData.category} onValueChange={(v) => updateField("category", v)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn hạng mục" />
                      </SelectTrigger>
                      <SelectContent>
                        {CATEGORIES.map((cat) => (
                          <SelectItem key={cat.id} value={cat.id}>
                            {cat.icon} {cat.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Địa chỉ địa điểm *</label>
                  <Input required value={formData.placeAddress} onChange={(e) => updateField("placeAddress", e.target.value)} placeholder="Địa chỉ cụ thể của địa điểm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Mô tả *</label>
                  <Textarea required value={formData.description} onChange={(e) => updateField("description", e.target.value)} placeholder="Mô tả chi tiết về địa điểm, lý do bạn đề cử..." rows={5} />
                </div>
              </div>
            </div>

            {/* Section: Hình ảnh */}
            <div className="relative">
              <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-accent/20">
                <div className="w-8 h-8 rounded-lg bg-gradient-tropical flex items-center justify-center">
                  <Camera size={16} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Hình ảnh (tối đa 5 ảnh)
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {images.map((img, i) => (
                  <div key={i} className="relative aspect-square rounded-lg overflow-hidden bg-muted ring-2 ring-primary/20">
                    <img src={img} alt={`Ảnh ${i + 1}`} className="w-full h-full object-cover" />
                    <button type="button" onClick={() => removeImage(i)} className="absolute top-1 right-1 w-6 h-6 rounded-full bg-destructive flex items-center justify-center shadow-lg">
                      <X size={14} className="text-destructive-foreground" />
                    </button>
                  </div>
                ))}
                {images.length < 5 && (
                  <label className="aspect-square rounded-lg border-2 border-dashed border-primary/30 hover:border-primary hover:bg-primary/5 flex flex-col items-center justify-center cursor-pointer transition-all bg-muted/50 group">
                    <Upload size={24} className="text-muted-foreground group-hover:text-primary mb-1 transition-colors" />
                    <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">Tải ảnh</span>
                    <input type="file" accept="image/*" multiple className="hidden" onChange={handleImageUpload} />
                  </label>
                )}
              </div>
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full text-base shadow-lg">
              <Send size={18} className="mr-2" /> Gửi đề cử
            </Button>
          </motion.form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Nomination;
