import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"
import Card from '../UI/Card'

const ExpenseItem =(props)=> {
    // title refers to initial value where as seTitle refers to upadte value
//  const [title, setTitle] =useState(props.title);   
//     const clickHandler = ()=>{
//         setTitle("Education");
        
//     };
    return (
        <li>
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            
            <div className='expense-item__description'>
              <h2>{props.title}</h2>
              <div className='expense-item__price'>${props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
        </Card>
        </li>
    )


}

export default ExpenseItem;