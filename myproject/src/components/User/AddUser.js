import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModel from '../UI/ErrorModel';
import Wrapper from '../../Helpers/Wrapper';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError]=useState();

 const addUserHandler = (event) => {
        // calling event 
        event.preventDefault();
        // trim is used to remove the extra space and length==0 means length must be equal to zero
        if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
           setError({
            title: 'invalid input',
            message: 'please enter a valid name and age (non-empty values)'
           });
            return;
        }
        if(+enteredAge < 1){
            setError({
                title: 'invalid age',
                message: 'Please enter  a valid age (>0)'
               });
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler =() =>{
        setError(null);
    }

    return (
        // <div>
        <Wrapper>
       {error && <ErrorModel title ={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}> 
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id="username" type="text"value={enteredUsername}  onChange={usernameChangeHandler}/>

                <label htmlFor='age' >Age</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />

                <Button type="submit">Add User</Button>
            </form>
     
        </Card>
        </Wrapper>
        // </div>

    )

};

export default AddUser;