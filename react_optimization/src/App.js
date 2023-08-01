import React,{useState} from 'react';
import Button from './component/UI/Button';
import DemoOutput from './component/Demo/DemoOutput';
import './App.css';

function App() {
const [showParagraph, setShowParagraph] =useState(false);
console.log('App Running');

const toggleParagraphHandler = () => {
  setShowParagraph((prevShowParagraph) => !prevShowParagraph);
};

  return (
    <div className="top_part">
     <h1>Hi there!</h1>
    <DemoOutput show={false} />
     <Button onClick={toggleParagraphHandler}>Click me</Button>
    </div>

  );
}

export default App;
