import React,{useState}  from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expense from "./components/Expenses/Expense";


const DUMMY_EXPENSE=[
  {
    id:'e1',
    title: 'Car Insurence',
   amount:245 ,
   date: new Date (2021, 2, 28)
  },
  { 
    id:'e2',
    title: 'House hold',
   amount:485 ,
   date: new Date (2020, 7, 12)
  },
  { 
    id:'e3',
    title: 'Study',
   amount:345 ,
   date: new Date (2011, 5, 29)
  
  }
  // { 
  //   id:'e4',
  //   title: 'Medical',
  //  amount:885 ,
  //  date: new Date (2020, 2, 21)
  // }
  ] 

const App=()=>{
  const [expense, setExpense] = useState(DUMMY_EXPENSE);
  const addExpenseHandler = (expense) => {
    // console.log('In App.js');
    // console.log(expense);
    setExpense((prevExpense) => {
      return [expense, ...prevExpense]
    });

  };
  
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "let's get started"),
  //   React.createElement(Expense, {items:expense})
  // );
  return (
    <>
<NewExpense onAddExpense = {addExpenseHandler}/>
   <Expense items ={expense}/>
    </>
   
  );
}

export default App;
