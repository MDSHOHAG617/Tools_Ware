import React from "react";
import { toast } from "react-toastify";

const OrdersRow = ({ order, index }) => {
  const { name, img, price, email } = order;

  const handleDelete = (email) => {
    fetch(`http://localhost:5000/tool/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Products : ${name} is deleted`);
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class=" avatar sm:w-12 lg:w-16 rounded">
          <img src={img} alt="" />
        </div>
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <button
          onClick={() => handleDelete(email)}
          className=" btn btn-sm btn-error"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default OrdersRow;
