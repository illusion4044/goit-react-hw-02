import React from 'react';

export default function Options({ feedback, setFeedback, resetFeedback }) {
  return (
    <div>
      <button onClick={() => setFeedback((prevFeedback) => ({ ...prevFeedback, good: prevFeedback.good + 1 }))}>Good</button>
      <button onClick={() => setFeedback((prevFeedback) => ({ ...prevFeedback, neutral: prevFeedback.neutral + 1 }))}>Neutral</button>
      <button onClick={() => setFeedback((prevFeedback) => ({ ...prevFeedback, bad: prevFeedback.bad + 1 }))}>Bad</button>
      {feedback.good + feedback.neutral + feedback.bad > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
}
