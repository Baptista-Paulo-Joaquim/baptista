import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import About from "./screens/About";
import Skills from "./screens/Skills";
import Contact from "./screens/Contact";
import Blog from "./screens/Blog";
import Certification from "./screens/Certification";
import Services from "./screens/Services";
import NotFound from "./screens/NotFound";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/"/>
        <Route element={<About />} path="/about"/>
        <Route element={<Skills />} path="/skills"/>
        <Route element={<Contact />} path="/contact"/>
        <Route element={<Blog />} path="/blog"/>
        <Route element={<Certification />} path="/certification"/>
        <Route element={<Services />} path="/services"/>
        <Route element={<NotFound />} path="*"/>
      </Routes>
    </BrowserRouter>
  );
}
