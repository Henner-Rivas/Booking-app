import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "tailwindcss/tailwind.css";
import Hotels from "./pages/Hotels";
import Hotel from "./pages/Hotel";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="box-border">
      <BrowserRouter>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:id" element={<Hotel />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
