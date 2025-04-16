"use client";
import { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => {
        console.log("react", count);
        setCount((prev) => prev + 1);
      }}
    >
      React {count}
    </button>
  );
};
export default Button;
