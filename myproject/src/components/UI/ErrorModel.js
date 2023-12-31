import React from "react";
import ReactDom from 'react-dom';
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModel.module.css"

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />
};

const ModelOverlay = (props) => {
    return(
    <Card className={classes.model}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>

        <div className={classes.content}>
            <p>{props.message}</p>
        </div>

        <footer className={classes.actions}>

            <Button onClick={props.onConfirm}>Okey</Button>
        </footer>

    </Card>
    )
};

const ErrorModel = (props) => {
    return (
        <React.Fragment>

            {/* backdrop don'et allow use to enter values 
    <div className={classes.backdrop}onClick ={props.onConfirm} />
    <Card className={classes.model}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>

        <div className={classes.content}>
            <p>{props.message}</p>
        </div>

        <footer className={classes.actions}>

            <Button onClick={props.onConfirm}>Okey</Button>
        </footer>
    </Card> */}

            {ReactDom.createPortal(
                <Backdrop
                 onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root')
            )};
            {ReactDom.createPortal(
                <ModelOverlay
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm} />,
                document.getElementById('overlay-root')
            )};


        </React.Fragment>
    )
};
export default ErrorModel;