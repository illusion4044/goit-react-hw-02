import React from 'react';

const Feedback = ({ feedback }) => {
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercentage = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div>
      <h2>Feedback Statistics</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total feedback: {totalFeedback}</p>
      <p>Positive feedback: {positiveFeedbackPercentage}%</p>
    </div>
  );
};

export default Feedback;
