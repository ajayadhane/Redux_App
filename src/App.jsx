import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./features/counter/CounterSlice";

const App = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    if (count > 0) {
      dispatch(decrement());
    }
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className="main-section">
      <h2>Simple Counter Function</h2>
      <div className="container">
        <button onClick={handleIncrement}>+</button>
        <p>{count}</p>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>0</button>
      </div>
    </div>
  );
};

export default App;
