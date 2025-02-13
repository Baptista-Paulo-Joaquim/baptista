import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import NotFound from "./screens/NotFound";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/"/>
        <Route element={<NotFound />} path="*"/>
      </Routes>
    </BrowserRouter>
  );
}
