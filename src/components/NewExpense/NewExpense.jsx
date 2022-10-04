import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString().slice(2),
    };
    props.onAddExpense(expenseData);
  };

  const toggleForm = () => {
    showForm ? setShowForm(false) : setShowForm(true);
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={toggleForm}>Add New Expense</button>}
      {showForm && (
        <ExpenseForm
          cancel={toggleForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
