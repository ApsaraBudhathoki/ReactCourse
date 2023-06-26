import React, { useState } from 'react';
// import ExpenseItem from "./ExpenseItem";
import './Expense.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from './ExpenseChart';

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
 

  // let expenseContent = <p>No expenses found here</p>

  // if(filteredExpense.length>0){
  //   expenseContent = filteredExpense.map((expense) => (
  //   <ExpenseItem
  //   key={expense.id}
  //   title={expense.title}
  //   amount={expense.amount}
  //   date={expense.date}
  // />
  //   ))
  // }
  return (
    <>
      <Card className='expense'>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
          <ExpenseChart expense={filteredExpense}/>
        <ExpenseList items = {filteredExpense} />
      
        {/* {props.items.map((expense) => ( */}

        {/* {filteredExpense.length === 0 ? (
          <p>There is no expense</p>
        ) : (
          filteredExpense.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )
      }; */}


        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        /> */}
        {/* <
        ExpenseItem title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <
        ExpenseItem title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <
        ExpenseItem title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}

      </Card>
    </>
  )
}
export default Expense;