import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import AdminLogin from "./components/Admin/AdminLogin";
import ForegtPassword from "./components/Admin/ForgetPassword";
import Blogs1 from "./components/Admin/Blogs1";
import UpdateBlog from "./components/Admin/UpdateBlog";
import Slider from "./components/Slider";
import Services from "./components/Services";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import Career from "./components/Career";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import AdminMenu from "./components/Admin/AdminMenu";
import Users from "./components/Admin/Users";
import SpeedUpLifeline from "./components/Admin/SpeedUpLifeline";
import CareerBlock from "./components/Admin/CareerBlock";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Websitedev from "./components/Websitedev";
import Logodesign from "./components/Logodesign";
import Andriod from "./components/Andriod";
import Itstaffing from "./components/Itstaffing";
import Scrolltop from "./components/Scrolltop";
function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="mouse-cursor style4"></div>
      <Router>
        <Routes>
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="*" element={<UserRoutes />} />
        </Routes>
      </Router>
    </div>
  );
}

function UserRoutes() {
  return (
    <>
      <Header />
      <Scrolltop/>
      <Routes>
        <Route path="/" element={<Slider />} />
        <Route path="about" element={<Aboutus />} />
        <Route path="services" element={<Services />} />
        <Route path="websitedev" element={<Websitedev />} />
        <Route path="logodesign" element={<Logodesign />} />
        <Route path="androidios" element={<Andriod />} />
        <Route path="itstaffing" element={<Itstaffing />} />
        <Route path="career" element={<Career />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blogdetail" element={<BlogDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminLogin />} />
      <Route path="adminmenu" element={<AdminMenu />} />
      <Route path="forgotpassword" element={<ForegtPassword />} />
      <Route path="users" element={<Users />} />
      <Route path="careerblock" element={<CareerBlock />} />
      <Route path="lifeline" element={<SpeedUpLifeline />} />
      <Route path="blogs" element={<Blogs1 />} />
      <Route path="updateblog/:id" element={<UpdateBlog />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
