import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import About from "./screens/About";
import Skills from "./screens/Skills";
import Contact from "./screens/Contact";
import Blog from "./screens/Blog";
import Certifications from "./screens/Certifications";
import Services from "./screens/Services";
import Truck from "./screens/truckPage";
import NotFound from "./screens/NotFound";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Skills />} path="/skills" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Blog />} path="/blog" />
        <Route element={<Certifications />} path="/certifications" />
        <Route element={<Services />} path="/services" />
        <Route element={<Truck />} path="/services/truck" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}
