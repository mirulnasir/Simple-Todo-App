import React, { useState, useEffect } from 'react';
import CreateTask from './components/CreateTask'
import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';

function App() {
  const [welcomeMessage, setWelcomeMessage] = useState('')

  useEffect(() => {
    fetch('/welcome').then(res => res.json()).then(data => {
      setWelcomeMessage(data.message)
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {welcomeMessage}
          <div className="">
            <CreateTask />
          </div>
          <div className="">
            <Timer/>
          </div>
        </div>

      </header>

    </div>
  );
}

export default App;
