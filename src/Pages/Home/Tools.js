import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState("");
  console.log(tools);
  useEffect(() => {
    fetch("http://localhost:5000/tool")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div>
      tools : {tools.length}
      {/* {tools.map((tool) => console.log(tool))} */}
    </div>
  );
};

export default Tools;
