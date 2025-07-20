import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCounterByOne, increaseCounterByOne, increaseCounterByValue , resetCounter} from "../store/slices/counter.js"
export default function RecipeCounter() {
    const counterVal = useSelector((state) => state.counter.counterVal);
    const dispatch = useDispatch();
  return (
    <div>
      <h3>Recipe Counter</h3>
      <p>This page will display the number of recipes added.</p>
      <hr />
      <h6>Current Recipe Count: { counterVal }</h6>
      <div className="d-flex align-items-center">
        <button className="btn btn-danger" onClick={() => dispatch(decreaseCounterByOne())}>-1</button>
        <button className="btn btn-success mx-2" onClick={() => dispatch(increaseCounterByOne())}>+1</button>
        <button className="btn btn-info" onClick={() => dispatch(increaseCounterByValue(5))}>+5</button>
        <button className="btn btn-info mx-2" onClick={() => dispatch(increaseCounterByValue(10))}>+10</button>
        <button className="btn btn-warning" onClick={() => dispatch(resetCounter())}>Reset</button>
      </div>
    </div>
  );
}
