import { createContext } from "react";

export let stateContext = createContext({
  toggle: {
    calculator: true,
    month: false,
  },
});
