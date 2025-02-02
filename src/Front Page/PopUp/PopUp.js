import React, { useEffect, useState } from 'react';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Welcome to the app</h1>
      {showPopup && <PopUp />}
    </div>
  );
}

function PopUp() {
  return (
    <div style={{ padding: '20px', backgroundColor: 'lightblue', borderRadius: '5px' }}>
      <h2>Please log in</h2>
    </div>
  );
}

export default App;
