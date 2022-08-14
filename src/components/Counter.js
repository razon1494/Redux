import React from "react";
import Button from "./Button";
import Count from "./Count";

const Counter = ({ id, increment, decrement, count }) => {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <Count count={count} />
      <div className="flex space-x-3">
        <Button handler={() => increment(id)}>Increment</Button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={() => decrement(id)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
