import { useReducer } from "react";
import CounterA from "./CounterA";
import CounterB from "./CounterB";
import { Provider } from "./CounterContext";

const initialState = { counter: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "increase":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "decrease":
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increase = () => {
    dispatch({ type: "increase" });
  };

  const decrease = () => {
    dispatch({ type: "decrease" });
  };

  return (
    <Provider
      value={{
        counter: state.counter,
        increase: increase,
        decrease: decrease
      }}
    >
      <CounterA />
      <CounterB />
    </Provider>
  );
};

export default Counter;
