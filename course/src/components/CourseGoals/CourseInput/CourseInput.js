import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid,setIsValid]=useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.valuetrim().length>0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };
// 

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
       {/* If you entered any course then click the color of text won't chnage otherwise it change */}
        <label >Course Goal</label>
        <input  type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">ADD GOAL</Button>
    </form>
  );
};

export default CourseInput;
