import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, UserPlus, Eye, EyeOff, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !password.trim()) {
      toast({ title: "Vui lòng điền đầy đủ thông tin", variant: "destructive" });
      return;
    }
    if (password !== confirmPassword) {
      toast({ title: "Mật khẩu xác nhận không khớp", variant: "destructive" });
      return;
    }
    if (password.length < 6) {
      toast({ title: "Mật khẩu phải có ít nhất 6 ký tự", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName },
          emailRedirectTo: window.location.origin,
        },
      });
      if (error) {
        toast({ title: "Đăng ký thất bại", description: error.message, variant: "destructive" });
      } else {
        navigate("/xac-thuc-otp", { state: { email } });
        toast({ title: "Đăng ký thành công!", description: "Vui lòng kiểm tra email để xác thực tài khoản." });
      }
    } catch {
      toast({ title: "Có lỗi xảy ra", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="bg-card/80 backdrop-blur-sm border-border shadow-card">
            <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
            <CardHeader className="text-center pb-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center mx-auto mb-4 shadow-lg">
                <UserPlus className="text-primary-foreground" size={28} />
              </div>
              <CardTitle className="text-2xl text-foreground">Đăng ký tài khoản</CardTitle>
              <CardDescription className="text-muted-foreground">
                Tạo tài khoản để tham gia đề cử và bình chọn
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-foreground">Họ và tên</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Nguyễn Văn A"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground">Mật khẩu</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Ít nhất 6 ký tự"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-foreground">Xác nhận mật khẩu</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input
                      id="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="Nhập lại mật khẩu"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <Button type="submit" variant="hero" className="w-full" disabled={loading}>
                  {loading ? "Đang đăng ký..." : "Đăng ký"}
                </Button>
              </form>
              <div className="mt-6 text-center text-sm text-muted-foreground">
                Đã có tài khoản?{" "}
                <Link to="/dang-nhap" className="text-primary font-medium hover:underline">
                  Đăng nhập
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
