import Navbar from "./Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PrivatePage from "./pages/PrivatePage";

function App() {
  return (
    <Router>
      <div className="App font-sans bg-[#0a192f] text-white scroll-smooth">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/private" element={<PrivatePage />} />

          {/* semua route yang tidak dikenal */}
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;