import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="dashBoard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="text-2xl text-purple-400">DashBoard</h2>
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="dashBoard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-60 bg-sky-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard/">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/review">Add a Review</Link>
            <Link to="/dashboard/myProfile">My Profile</Link>
            {admin && <Link to="/dashboard/allCustomers">All Customers</Link>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
