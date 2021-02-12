import { useContext } from "react";
import { CounterContext } from "./CounterContext";

const CounterB = () => {
  const context = useContext(CounterContext);

  return <button onClick={context.decrease}>Decrease {context.counter}</button>;
};

export default CounterB;
