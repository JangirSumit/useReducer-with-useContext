import { useContext } from "react";
import { CounterContext } from "./CounterContext";

const CounterA = () => {
  const context = useContext(CounterContext);

  return <button onClick={context.increase}>Increase {context.counter}</button>;
};

export default CounterA;
