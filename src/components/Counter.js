import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  // useDisptach is a react-redux hook to gives us back a function (assigned to the "disptach" variable) that can disptach an action against the redux store
  const disptach = useDispatch();

  // inside useSelector: it will call a function that receives the state managed by Redux and return which part of the state we want
  // the function is executed by Redux
  // using useSelector, React-Redux will automatically set up a subscription to the Redux Store for this component
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    // disptach the action of type "increment", which is set in the store
    disptach({ type: "increment" });
  };

  const decrementHandler = () => {
    // disptach the action of type "decrement", which is set in the store
    disptach({ type: "decrement" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
