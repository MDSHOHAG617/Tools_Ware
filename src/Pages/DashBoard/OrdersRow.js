import React from "react";
import { toast } from "react-toastify";

const OrdersRow = ({ order, index, setDeletingProducts }) => {
  const { name, img, price, email } = order;

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
        <label
          onClick={() => setDeletingProducts(order)}
          for="delete-confirm-modal"
          class="btn btn-sm btn-error"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default OrdersRow;
