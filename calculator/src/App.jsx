import { useState } from 'react';
import Display from './components/Display';
import Button from './components/Button';

const App = () => {
  const [input, setInput] = useState('');

  const buttons = [
    '(', ')', '%', 'AC',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', 'Back', '=', '/',
  ];

  const handleClick = (value) => {
    if (value === 'AC') {
      setInput('');
    } else if (value === 'Back') {
      setInput(input.slice(0, -1));
    } else if (value === '=') {
      try {
        // Replace × and ÷ if used visually
        const result = eval(input);
        setInput(result.toString());
      } catch (error) {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <Display value={input} />
      <div className="buttons">
        {buttons.map((btn, index) => (
          <Button key={index} value={btn} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default App;
