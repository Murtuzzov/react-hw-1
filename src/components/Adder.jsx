import React from "react";

const Adder = ({ num1, num2 }) => {
  return (
    <div>
      <h1 className="task-number">ЗАДАЧА №3</h1>
      <span className="adder">
        {num1}+{num2}={num1 + num2}
      </span>
    </div>
  );
};

export default Adder;
