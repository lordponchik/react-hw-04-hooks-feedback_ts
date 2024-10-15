import { useState } from 'react';
import './App.css';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

function App() {
  const [goodFeedback, setGoodFeedback] = useState<number>(0);
  const [neutralFeedback, setNeutralFeedback] = useState<number>(0);
  const [badFeedback, setBadFeedback] = useState<number>(0);

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

  const countTotalFeedback = (): number => {
    return goodFeedback + neutralFeedback + badFeedback;
  };

  const countPositiveFeedbackPercentage = (): number => {
    return Math.round((goodFeedback / countTotalFeedback()) * 100) || 0;
  };

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions
          goodFeedback={goodFeedback}
          neutralFeedback={neutralFeedback}
          badFeedback={badFeedback}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            goodFeedback={goodFeedback}
            neutralFeedback={neutralFeedback}
            badFeedback={badFeedback}
            countTotalFeedback={countTotalFeedback()}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}

export default App;
