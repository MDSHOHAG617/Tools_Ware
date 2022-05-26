import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmMOdal = ({ deletingProducts, setDeletingProducts }) => {
  const handleDelete = () => {
    fetch(`https://fathomless-garden-42374.herokuapp.com/tool/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast(`Products : ${name} is deleted`);
          setDeletingProducts(null);
        }
      });
  };
  const { name, email } = deletingProducts;
  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are you sure you want to delete? {name}
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <button
              onClick={() => handleDelete()}
              className=" btn btn-xs btn-error"
            >
              Delete
            </button>
            <label for="delete-confirm-modal" class="btn btn-xs ">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmMOdal;
