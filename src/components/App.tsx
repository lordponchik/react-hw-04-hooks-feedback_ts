import { useState } from 'react';
import './App.css';

function App() {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const onLeaveFeedback = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name;

    switch (name) {
      case 'good':
        setGoodFeedback(prev => prev + 1);
        break;
      case 'neutral':
        setNeutralFeedback(prev => prev + 1);
        break;
      case 'bad':
        setBadFeedback(prev => prev + 1);
        break;

      default:
        console.log(`${name} not found`);
    }
  };

  return (
    <div className="App">
      <h2>Please leave feedback</h2>
      <ul>
        <li>
          <button type="button" name="good" onClick={onLeaveFeedback}>
            good
          </button>
        </li>
        <li>
          <button type="button" name="neutral" onClick={onLeaveFeedback}>
            neutral
          </button>
        </li>
        <li>
          <button type="button" name="bad" onClick={onLeaveFeedback}>
            bad
          </button>
        </li>
      </ul>
      <h2>Statistics</h2>
      <p>Good: {goodFeedback}</p>
      <p>Neutral: {neutralFeedback}</p>
      <p>Bad: {badFeedback}</p>
    </div>
  );
}

export default App;
