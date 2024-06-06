import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./CounterSlice";
import { useState } from "react";

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(null);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section className="text-[60px] flex flex-col">
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <h1>{count}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>

      <input
        type="text"
        className="text-black"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />

      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
