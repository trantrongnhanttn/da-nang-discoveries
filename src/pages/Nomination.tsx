import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Upload, X, Send } from "lucide-react";
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
    fullName: "",
    phone: "",
    email: "",
    address: "",
    description: "",
    category: "",
    placeName: "",
    placeAddress: "",
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
        if (ev.target?.result) {
          setImages((prev) => [...prev, ev.target!.result as string]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Gửi đề cử thành công!", description: "Cảm ơn bạn đã đề cử. Chúng tôi sẽ xem xét trong thời gian sớm nhất." });
    navigate("/");
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Đề cử
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Gửi đề cử của bạn
            </h1>
            <p className="text-muted-foreground text-lg">
              Chia sẻ những điều thú vị bạn biết về Đà Nẵng
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 shadow-card space-y-8"
          >
            {/* Thông tin người đề cử */}
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                Thông tin người đề cử
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Họ tên *</label>
                  <Input
                    required
                    value={formData.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Điện thoại *</label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="0901234567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Địa chỉ</label>
                  <Input
                    value={formData.address}
                    onChange={(e) => updateField("address", e.target.value)}
                    placeholder="Địa chỉ của bạn"
                  />
                </div>
              </div>
            </div>

            {/* Thông tin địa điểm */}
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                Thông tin địa điểm đề cử
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Tên địa điểm *</label>
                    <Input
                      required
                      value={formData.placeName}
                      onChange={(e) => updateField("placeName", e.target.value)}
                      placeholder="Tên gọi địa điểm"
                    />
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
                  <Input
                    required
                    value={formData.placeAddress}
                    onChange={(e) => updateField("placeAddress", e.target.value)}
                    placeholder="Địa chỉ cụ thể của địa điểm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Mô tả *</label>
                  <Textarea
                    required
                    value={formData.description}
                    onChange={(e) => updateField("description", e.target.value)}
                    placeholder="Mô tả chi tiết về địa điểm, lý do bạn đề cử..."
                    rows={5}
                  />
                </div>
              </div>
            </div>

            {/* Hình ảnh */}
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                Hình ảnh (tối đa 5 ảnh)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {images.map((img, i) => (
                  <div key={i} className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                    <img src={img} alt={`Ảnh ${i + 1}`} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removeImage(i)}
                      className="absolute top-1 right-1 w-6 h-6 rounded-full bg-destructive flex items-center justify-center"
                    >
                      <X size={14} className="text-destructive-foreground" />
                    </button>
                  </div>
                ))}
                {images.length < 5 && (
                  <label className="aspect-square rounded-lg border-2 border-dashed border-border hover:border-primary/50 flex flex-col items-center justify-center cursor-pointer transition-colors bg-muted/50">
                    <Upload size={24} className="text-muted-foreground mb-1" />
                    <span className="text-xs text-muted-foreground">Tải ảnh</span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </label>
                )}
              </div>
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full text-base">
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
