import React, { useState, useEffect } from 'react';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

const getInitialFeedback = () => {
  const savedFeedback = localStorage.getItem('feedback');
  return savedFeedback !== null ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
};

export default function App() {
  const [feedback, setFeedback] = useState(getInitialFeedback());
  const [totalFeedback, setTotalFeedback] = useState(0);

  useEffect(() => {
    const total = feedback.good + feedback.neutral + feedback.bad;
    setTotalFeedback(total);
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options feedback={feedback} setFeedback={setFeedback} resetFeedback={resetFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} />
      ) : (
        <Notification message="No feedback given yet" />
      )}
    </div>
  );
}
