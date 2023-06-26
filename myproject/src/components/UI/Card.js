import React from "react";

import classes from "./Card.module.css";
const Card =(props)=>{
 
       
            {/* props children gives us the value that passes between the card componnet */}
            // const classes = `${styles.card} ${props.className}`;
            // return <div className={classes.card}>{props.children}</div>
           
           return( <div className={`${classes.card} ${props.className}`}>{props.children}</div>
        
  ) ;
};

export default Card;
