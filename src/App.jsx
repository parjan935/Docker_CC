import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = () => {
    setShowMessage(true);
  };


  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        
      />
      <button onClick={handleButtonClick}>
        Show Welcome Message
      </button>
      {showMessage && (
        <p>Hi "{name}!!!" Welcome to Docker Image</p>
      )}
    </div>
  );
};

export default App;
