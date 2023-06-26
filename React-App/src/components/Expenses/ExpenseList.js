import React from "react";
import './ExpenseList.css'
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
    // let expenseContent = <p> No expense found</p>;

    if(props.items.length === 0){
        return <h2 className ='expense-list__fallback'>Found no expense</h2>
    }

        // expenseContent = filteredExpense.map((expense) => (
        //     <ExpenseItem
        //     key={expense.id}
        //     title ={expense.title}
        //     amount = {expense.amount}
        //     date = {expense.date}
        //     />
        // )

        
    return (
    <ul className="expense-list">
        {props.items.map ((expense)=>(
         <ExpenseItem
            key={expense.id}
            title ={expense.title}
            amount = {expense.amount}
            date = {expense.date}
            />
        ))};
    </ul>
    );
    }

    export default ExpenseList;