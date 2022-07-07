import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import React, { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (enteredFilter) => {
    setFilteredYear(enteredFilter);
    console.log(enteredFilter);
  };

  const expensesByYear = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onSaveFilter={filterChangeHandler}
      ></ExpensesFilter>
      <ExpensesChart expenses={expensesByYear}></ExpensesChart>
      <ExpensesList items={expensesByYear}></ExpensesList>
    </Card>
  );
};
export default Expenses;
