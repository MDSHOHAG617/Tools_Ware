import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFound from "./NotFound/NotFound";
import Purchase from "./Pages/About/Purchase";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import Portfolio from "./Pages/About/Portfolio";
import DashBoard from "./Pages/DashBoard/DashBoard";
import MyOrders from "./Pages/DashBoard/MyOrders";
import AddReview from "./Pages/DashBoard/AddReview";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route
          path="/purchase"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        /> */}
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashBoard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
        </Route>

        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="/blogs" element={<></>} />
        <Route path="/portfolio" element={<Portfolio></Portfolio>} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
