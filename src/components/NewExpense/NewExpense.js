import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [display, setDisplay] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  // let [display, setDisplay] = useState(false);

  // const displayFormHandler = () =>{
  //   setDisplay(display = true);
  // };

  // if (display === false) {
  //   return (
  //     <div className="new-expense">
  //       <button type="button" onChange={displayFormHandler}>
  //         Add New Expense
  //       </button>
  //     </div>
  //   );
  // }

  const displayFormHandler = () => {
    setDisplay(true);
  };

  const stopDisplayHandler = () => {
    setDisplay(false);
  };

  return (
    <div className="new-expense">
      {!display && (
        <button onClick={displayFormHandler}>Add New Expense</button>
      )}
      {display && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onStopDisplay={stopDisplayHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
