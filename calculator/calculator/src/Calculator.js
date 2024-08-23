import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

function Calculator() {
  const [currentExpression, setCurrentExpression] = useState('');
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {
    setCurrentExpression(currentExpression + value);
  };

  const handleClear = () => {
    setCurrentExpression('');
    setResult(null);
  };

  const handleEvaluate = () => {
    try {
      const calculatedResult = eval(currentExpression);
      setResult(calculatedResult);
    } catch (error) {
      console.error('Error during evaluation:', error);
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <Display expression={currentExpression} result={result} />
      <div className="button-container">
        {['7', '8', '9', '/'].map((value) => (
          <Button key={value} value={value} onClick={handleButtonClick} />
        ))}
        {['4', '5', '6', '*'].map((value) => (
          <Button key={value} value={value} onClick={handleButtonClick} />
        ))}
        {['1', '2', '3', '-'].map((value) => (
          <Button key={value} value={value} onClick={handleButtonClick} />
        ))}
        {['0', '.', '=', '+'].map((value) => (
          <Button
            key={value}
            value={value}
            onClick={value === '=' ? handleEvaluate : handleButtonClick}
          />
        ))}
        <Button value="C" onClick={handleClear} />
      </div>
    </div>
  );
}

export default Calculator;
