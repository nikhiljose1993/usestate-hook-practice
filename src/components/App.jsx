import React, { useState } from "react";

function App() {
  const [currentTime, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
    </div>
  );
}

export default App;
