import React, { useState } from "react";
import Card from "../UI/Card.jsx";
import ExpensesFilter from "./ExpensesFilter.jsx";
import ExpensesList from "./ExpensesList.jsx";
import ExpensesChart from "./ExpensesChart.jsx";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2022);

  const filteredExpenses = props.items.filter(
    (exp) => exp.date.getFullYear() === Number(filteredYear)
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} changeYear={setFilteredYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList year={filteredYear} items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
