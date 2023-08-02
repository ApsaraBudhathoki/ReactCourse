import React, { useState, useCallback } from 'react';
import Button from './component/UI/Button';
import DemoOutput from './component/Demo/DemoOutput';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setallowToggle] = useState(false);


  console.log('App Running');

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);


  const allowToggleHandler = () => {
    setallowToggle(true);
  }

  return (
    <div className="top_part">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle!</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>

  );
}

export default App;
