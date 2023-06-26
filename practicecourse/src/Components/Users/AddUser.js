import React  from "react";

const AddUser = (props) =>{
    const addUserHandler =(event) =>{
        event.preventDefault();
    }
    <form onSubmit = {addUserHandler}>
        <label htmlFor>Username</label>
        <input id= "username" type="text"/>
        <label htmlFor='age'>Age(Years)</label>
        <input id="age" type="number"/>
        <button type="Submit">Add USer</button>
    </form>
};
export default AddUser;