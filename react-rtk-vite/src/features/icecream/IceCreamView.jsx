import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

function IceCreamView() {
  const [number, setNumber] = useState(1);
  const numberOfIceCreams = useSelector(
    (state) => state.icecream.numberOfIceCreams
  );

  const dispatch = useDispatch();
  console.log(number);
  return (
    <div>
      <h2>Number of Ice Cream- {numberOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order</button>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(restocked(parseInt(number)))}>
        Restock
      </button>
    </div>
  );
}

export default IceCreamView;
