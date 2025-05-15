//import "./App.css";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HajjPackages from "./pages/HajjPackages";
import Headers from "./components/Headers";
import UmrahPackages from "./pages/UmrahPackages";
import Footer from "./components/Footer";
import BlogDetails from "./pages/BlogDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import BlogDetailsTwo from "./pages/BlogDetailsTwo";
import BlogDetailsThree from "./pages/BlogDetailsThree";
import NotificationDialog from "./components/NotificationDialog";
import { useState } from "react";
function App() {
  const [isDialogVisible, setIsDialogVisible] = useState(true);

  const handleClose = () => {
    setIsDialogVisible(false);
  };

  const handleAccept = () => {
    console.log("User accepted notifications");
    setIsDialogVisible(false);
  };
  return (
    <div>
      <Helmet>
        <title>Hajj Travel Agency</title>
        <meta
          name="description"
          content="Explore the best Hajj and Umrah packages with our trusted travel agency."
        />
        <link rel="canonical" href="https://broadwayhajj.com" />
      </Helmet>
      <div className="">
        <NotificationDialog isVisible={isDialogVisible} onClose={handleClose} />
      </div>
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hajj-packages" element={<HajjPackages />} />
          <Route path="/umrah-packages" element={<UmrahPackages />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/blog-details-two" element={<BlogDetailsTwo />} />
          <Route path="/blog-details-three" element={<BlogDetailsThree />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
