import React from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1> purchases for: {id}</h1>
    </div>
  );
};

export default Purchase;
