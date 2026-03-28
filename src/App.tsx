import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NominationList from "./pages/NominationList.tsx";
import Nomination from "./pages/Nomination.tsx";
import PlaceDetail from "./pages/PlaceDetail.tsx";
import CategoryDetail from "./pages/CategoryDetail.tsx";
import Rules from "./pages/Rules.tsx";
import News from "./pages/News.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import VerifyOTP from "./pages/VerifyOTP.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/danh-sach" element={<NominationList />} />
          <Route path="/de-cu" element={<Nomination />} />
          <Route path="/dia-diem/:id" element={<PlaceDetail />} />
          <Route path="/hang-muc/:id" element={<CategoryDetail />} />
          <Route path="/the-le" element={<Rules />} />
          <Route path="/tin-tuc" element={<News />} />
          <Route path="/dang-nhap" element={<Login />} />
          <Route path="/dang-ky" element={<Register />} />
          <Route path="/xac-thuc-otp" element={<VerifyOTP />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
