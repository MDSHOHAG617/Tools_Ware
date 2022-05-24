import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const handleAddItems = (event) => {
    event.preventDefault();
    const img = event.target.url.value;
    const name = event.target.name.value;
    const price = event.target.price.value;
    const Quantity = event.target.Quantity.value;
    const supplier = event.target.supplier.value;
    const description = event.target.description.value;
    console.log(img, name, price, Quantity, supplier, description);
    const Items = { img, name, price, Quantity, supplier, description };

    fetch("http://localhost:5000/tool", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(Items),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("item added success");
      });
  };
  return (
    <div>
      <h2>Add a Products</h2>
      <form onSubmit={handleAddItems}>
        <input
          className="p-2 m-2 w-50 bg-sky-200 rounded"
          required
          type="url"
          placeholder="Insert img url"
          name="url"
        />
        <br />
        <input
          className="p-2 m-2 w-50"
          type="text"
          required
          placeholder="Insert Name"
          name="name"
        />
        <br />
        <input
          className="p-2 m-2 w-50"
          type="number"
          required
          placeholder="insert Price"
          name="price"
        />
        <br />
        <input
          className="p-2 m-2 w-50"
          type="number"
          required
          placeholder="insert quantity"
          name="Quantity"
        />
        <br />
        <input
          className="p-2 m-2 w-50"
          type="text"
          required
          placeholder="supplier"
          name="supplier"
        />
        <br />
        <input
          className="p-2 m-2 w-50"
          type="text"
          required
          placeholder="Description"
          name="description"
        />
        <br />
        <input
          className="bg-primary btn text-white"
          type="submit"
          value="Add items"
        />
      </form>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text">ProductImg</span>
          </label>
          <input
            type="url"
            placeholder="Insert img url"
            name="url"
            required
            className="input input-bordered w-full max-w-xs"
            {...register("ProductImg", {
              required: {
                value: true,
                message: "Product image is Required",
              },
            })}
          />
          <label className="label">
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text">ProductName</span>
          </label>
          <input
            type="text"
            required
            placeholder="Product Name"
            className="input input-bordered w-full max-w-xs"
            {...register("ProductName", {
              required: {
                value: true,
                message: "Product name is Required",
              },
            })}
          />
          <label className="label">
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text">ProductDesc</span>
          </label>
          <input
            type="text"
            required
            placeholder="Product Description"
            className="input input-bordered w-full max-w-xs"
            {...register("ProductDesc", {
              required: {
                value: true,
                message: "Product desc is Required",
              },
            })}
          />
          <label className="label">
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text">MinOrderQuantity</span>
          </label>
          <input
            type="number"
            required
            placeholder="Minimum Quantity"
            className="input input-bordered w-full max-w-xs"
            {...register("MinOrderQuantity", {
              required: {
                value: true,
                message: "Product Minimum order quantity is Required",
              },
            })}
          />
          <label className="label">
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text">AvailableQuantity</span>
          </label>
          <input
            type="number"
            required
            placeholder="Available Quantity"
            className="input input-bordered w-full max-w-xs"
            {...register("AvailableQuantity", {
              required: {
                value: true,
                message: "Product Available quantity is Required",
              },
            })}
          />
          <label className="label">
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            required
            placeholder="Price"
            className="input input-bordered w-full max-w-xs"
            {...register("Price", {
              required: {
                value: true,
                message: "Price  is Required",
              },
            })}
          />
          <label className="label">
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn w-full max-w-xs text-white"
          type="submit"
          value="Add Products"
        />
      </form> */}
    </div>
  );
};

export default AddProduct;
