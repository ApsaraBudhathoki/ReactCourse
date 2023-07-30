import React from 'react';

const DemoOutput = (props) =>{
return(
    <div><p>{props.show?! 'This is new!' : ''}</p></div>
)
}
export default DemoOutput;