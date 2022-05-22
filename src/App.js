import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFound from "./NotFound/NotFound";
import Purchase from "./Pages/About/Purchase";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/purchase/:id" element={<Purchase />} />
        <Route path="/login" element={<></>} />
        <Route path="/blogs" element={<></>} />
        <Route path="/dashboard" element={<></>} />
        <Route path="/portfolio" element={<></>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
