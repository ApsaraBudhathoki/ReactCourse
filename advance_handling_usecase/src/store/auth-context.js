import React from "react";

const AuthContext= React.createContext({
isLoggedIn: false,
// onLogged: ()=>{
    
// }
// login:(email, password)=>{},logout:()=>{},
});
export default AuthContext;