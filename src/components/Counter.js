import { useSelector } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  // inside useSelector: it will call a function that receives the state managed by Redux and return which part of the state we want
  // the function is executed by Redux
  // using useSelector, React-Redux will automatically set up a subscription to the Redux Store for this component 
  const counter = useSelector(state => state.counter)

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
