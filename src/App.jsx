import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counter/CounterSlice";

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

  return (
    <div className="main-section">
      <h2>First Redux App</h2>
      <div className="container">
        <button onClick={handleIncrement}>+</button>
        <p>{count}</p>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
};

export default App;
