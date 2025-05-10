//import "./App.css";
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
function App() {
  return (
    <div>
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
