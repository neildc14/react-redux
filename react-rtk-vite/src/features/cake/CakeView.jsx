import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

function CakeView() {
  const numberOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Cakes- {numberOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order</button>
      <button onClick={() => dispatch(restocked(3))}>Restock</button>
    </div>
  );
}

export default CakeView;
