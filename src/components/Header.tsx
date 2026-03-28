import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Moon, Sun, LogIn, LogOut, UserCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { path: "/", label: "Trang chủ" },
  { path: "/danh-sach", label: "Danh sách đề cử" },
  { path: "/de-cu", label: "Đề cử" },
  { path: "/the-le", label: "Thể lệ" },
  { path: "/tin-tuc", label: "Tin tức" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md">
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent" />
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🌊</span>
          <div>
            <h1 className="font-display text-lg font-bold leading-tight text-foreground">
              100 Điều Thú Vị
            </h1>
            <p className="text-xs text-muted-foreground leading-tight">Du lịch Đà Nẵng</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors ml-1"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link to="/de-cu">
            <Button variant="hero" size="sm" className="ml-2">
              Đề cử ngay
            </Button>
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 text-foreground"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/de-cu" onClick={() => setIsOpen(false)}>
              <Button variant="hero" size="sm" className="w-full mt-2">
                Đề cử ngay
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
