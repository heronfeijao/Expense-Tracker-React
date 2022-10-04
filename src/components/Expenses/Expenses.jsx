import React, { useState } from "react";
import Card from "../UI/Card.jsx";
import ExpenseItem from "./ExpenseItem.jsx";
import ExpensesFilter from "./ExpensesFilter.jsx";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2022);

  const expenseItems = props.items.map((item) => {
    console.log(item);
    return (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    );
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} changeYear={setFilteredYear} />
      {expenseItems}
    </Card>
  );
};

export default Expenses;
