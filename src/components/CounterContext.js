import { createContext } from "react";

const CounterContext = createContext();

const Provider = CounterContext.Provider;

export { Provider, CounterContext };
