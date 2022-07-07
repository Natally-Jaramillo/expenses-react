import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //console.log(expenseData);
    props.onAddExpense(expenseData);
    setHideForm(false);
  };
  const [hideForm, setHideForm] = useState(false);
  const showFormHandler = (event) => {
    setHideForm(true);
  };
  const showButtonHandler = () => {
    setHideForm(false);
  };
  return (
    <div className="new-expense">
      {!hideForm && (
        <button onClick={showFormHandler}> Add New Expense</button>
      )}
      {hideForm  && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={showButtonHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};
export default NewExpense;
