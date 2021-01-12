import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [welcomeMessage,setWelcomeMessage] = useState('')

  useEffect(()=>{
    fetch('/welcome').then(res=>res.json()).then(data=>{
      setWelcomeMessage(data.message)
    })
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {welcomeMessage}
        </p>
      </header>
    </div>
  );
}

export default App;
