import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = () => {
    setShowMessage(true);
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f4f4',
    },
    input: {
      padding: '10px',
      width: '250px',
      marginBottom: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '16px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
    },
    message: {
      marginTop: '20px',
      fontSize: '18px',
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        style={styles.input}
      />
      <button onClick={handleButtonClick} style={styles.button}>
        Show Welcome Message
      </button>
      {showMessage && (
        <p style={styles.message}>Hi "{name}!!!" Welcome to Docker Image</p>
      )}
    </div>
  );
};

export default App;