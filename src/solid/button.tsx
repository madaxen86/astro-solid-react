import { createSignal } from "solid-js";

const Button = () => {
  const [count, setCount] = createSignal(0);
  return (
    <button
      onClick={() => {
        console.log("solid", count());
        setCount((prev) => prev + 1);
      }}
    >
      Solid {count()}
    </button>
  );
};
export default Button;
