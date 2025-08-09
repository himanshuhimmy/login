import { createContext } from "react";

export let stateContext = createContext({
  toggle: {
    calculator: true,
    month: false,
  },
  IncomeMonth: () => {},
  ExpenceMonth: () => {},
  filteredIncome: () => {},
  filteredExpence: () => {},
  RemoveIncome: () => {},
  RemoveExpence: () => {},
  AlterIncome: () => {},
  AlterExpence: () => {},
  incomeRange: () => {},
  expenceRange: () => {},
});
