import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Customer from "./Customer";

const AllCustomers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json().then((data) => setCustomers(data)));
  }, [customers]);
  //   console.log(customer);

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Id</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Remove Customer</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{customer._id}</td>
                <td>{customer.email}</td>
                <td>
                  <button class="btn btn-xs">make admin</button>
                </td>
                <td>
                  <button class="btn btn-xs">Remove Customer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCustomers;
