
import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  //using diferent states for every object
  const [titleEntered, setEnteredTitle] = useState("");
  const [amountEntered, setAmountEntered] = useState("");
  const [dateEntered, setDateEntered] = useState("");

  //using one state for all the objects

  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  // });
  const titleChangeHandler = (t) => {
    setEnteredTitle(t.target.value);
    //using the spread operator to use the updated state of title object without changing values of other objects
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: t.target.value
    // })

    //updating the state that depends on previous state
    // setUserInput((prevState) => {
    //     return {...prevState, enteredAmount: t.target.value}
    // })
  };

  const amountChangeHandler = (a) => {
    setAmountEntered(a.target.value);
    //using the spread operator to use the updated state of amount object without changing values of other objects
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: a.target.value
    // })

    // updating the state that depends on previous state
    // setUserInput((prevState) => {
    //     return {...prevState, enteredAmount: a.target.value}
    // })
  };

  const dateChangeHandler = (d) => {
    setDateEntered(d.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate: d.target.value
    // })

    //updating the state that depends on previous state
    // setUserInput((prevState) => {
    //     return {...prevState, enteredAmount: d.target.value}
    // })
  };

  const submitHandler = (sub) => {
    sub.preventDefault();

    const expenseData = {
      title: titleEntered,
      amount: +amountEntered,
      date: new Date(dateEntered),
    };

    props.onSaveExpenseData(expenseData);
    setAmountEntered("");
    setEnteredTitle("");
    setDateEntered("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={titleEntered}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amountEntered}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            maxc="2025-12-31"
            value={dateEntered}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick = {props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;