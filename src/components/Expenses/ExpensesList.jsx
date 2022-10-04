import React from "react";

import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem.jsx";

const ExpensesList = (props) => {
  const expensesContent =
    props.items.length > 0 ? (
      props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))
    ) : (
      <h2 className="expenses-list__fallback">No expense items.</h2>
    );

  return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;
