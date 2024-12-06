import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    let calcResult;
    switch (operation) {
      case 'add':
        calcResult = number1 + number2;
        break;
      case 'subtract':
        calcResult = number1 - number2;
        break;
      case 'multiply':
        calcResult = number1 * number2;
        break;
      case 'divide':
        if (number2 === 0) {
          alert('Division by zero is not allowed.');
          return;
        }
        calcResult = number1 / number2;
        break;
      default:
        alert('Please select a valid operation.');
        return;
    }

    setResult(calcResult);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <div>
        <label>
          Number 1:
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            style={{ margin: '5px', padding: '5px', width: '100%' }}
          />
        </label>
      </div>
      <div>
        <label>
          Number 2:
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            style={{ margin: '5px', padding: '5px', width: '100%' }}
          />
        </label>
      </div>
      <div>
        <label>
          Operation:
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            style={{ margin: '5px', padding: '5px', width: '100%' }}
          >
            <option value="">Select...</option>
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
          </select>
        </label>
      </div>
      <button
        onClick={handleCalculate}
        style={{
          marginTop: '10px',
          padding: '10px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          width: '100%',
        }}
      >
        Calculate
      </button>
      {result !== null && (
        <div style={{ marginTop: '20px', fontSize: '18px' }}>
          <strong>Result: </strong> {result}
        </div>
      )}
    </div>
  );
};

export default Calculator;


