import React, { useState } from "react";
import Card from "../UI/Card.jsx";
import ExpenseItem from "./ExpenseItem.jsx";
import ExpensesFilter from "./ExpensesFilter.jsx";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2022);

  const filteredExpenses = props.items.filter(
    (exp) => exp.date.getFullYear() === Number(filteredYear)
  );

  const expensesContent =
    filteredExpenses > 0 ? (
      filteredExpenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))
    ) : (
      <p>No expense items.</p>
    );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} changeYear={setFilteredYear} />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
