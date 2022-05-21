import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Purchases from "./Pages/About/Purchases";
import NotFound from "./NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/login" element={<Purchases />} />
        <Route path="/blogs" element={<Purchases />} />
        <Route path="/dashboard" element={<Purchases />} />
        <Route path="/portfolio" element={<Purchases />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
