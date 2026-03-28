import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const email = (location.state as { email?: string })?.email || "";

  const handleVerify = async () => {
    if (otp.length !== 6) {
      toast({ title: "Vui lòng nhập đủ 6 số OTP", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: "signup",
      });
      if (error) {
        toast({ title: "Xác thực thất bại", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Xác thực thành công!", description: "Tài khoản của bạn đã được kích hoạt." });
        navigate("/");
      }
    } catch {
      toast({ title: "Có lỗi xảy ra", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!email) {
      toast({ title: "Không tìm thấy email", variant: "destructive" });
      return;
    }
    setResending(true);
    try {
      const { error } = await supabase.auth.resend({
        type: "signup",
        email,
      });
      if (error) {
        toast({ title: "Gửi lại OTP thất bại", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Đã gửi lại mã OTP!", description: "Vui lòng kiểm tra email của bạn." });
      }
    } catch {
      toast({ title: "Có lỗi xảy ra", variant: "destructive" });
    } finally {
      setResending(false);
    }
  };

  if (!email) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16 flex items-center justify-center px-4">
          <Card className="bg-card/80 backdrop-blur-sm border-border shadow-card max-w-md w-full text-center">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-4">Không tìm thấy email để xác thực.</p>
              <Link to="/dang-ky">
                <Button variant="hero">Quay lại đăng ký</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4 shadow-lg">
                <ShieldCheck className="text-primary-foreground" size={28} />
              </div>
              <CardTitle className="text-2xl text-foreground">Xác thực Email</CardTitle>
              <CardDescription className="text-muted-foreground">
                Chúng tôi đã gửi mã OTP 6 số đến
              </CardDescription>
              <div className="flex items-center justify-center gap-2 mt-2">
                <Mail className="text-primary" size={16} />
                <span className="text-sm font-semibold text-primary">{email}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <Button
                variant="hero"
                className="w-full"
                onClick={handleVerify}
                disabled={loading || otp.length !== 6}
              >
                {loading ? "Đang xác thực..." : "Xác thực"}
              </Button>

              <div className="text-center space-y-3">
                <p className="text-sm text-muted-foreground">
                  Không nhận được mã?{" "}
                  <button
                    onClick={handleResend}
                    disabled={resending}
                    className="text-primary font-medium hover:underline disabled:opacity-50"
                  >
                    {resending ? "Đang gửi..." : "Gửi lại mã"}
                  </button>
                </p>
                <Link
                  to="/dang-ky"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft size={14} />
                  Quay lại đăng ký
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

export default VerifyOTP;
