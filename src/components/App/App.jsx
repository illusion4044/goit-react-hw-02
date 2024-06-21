import React, { useState, useEffect } from 'react';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';

const App = () => {
    const [feedback, setFeedback] = useState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    
  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options feedback={feedback} setFeedback={setFeedback} />
      {Object.values(feedback).some(count => count > 0) ? (
        <Feedback feedback={feedback} />
      ) : (
        <Notification message="No feedback given yet" />
      )}
    </div>
  );
};

export default App;
