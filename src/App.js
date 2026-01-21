import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [adjective, setAdjective] = useState('Crazy');

  const changeAdjective = () => {
    if(adjective === 'Crazy'){
    setAdjective('Beautiful');
    }
    else{
      setAdjective('Crazy');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {adjective} World!
        </p>
        <button onClick={changeAdjective}>Change Adjective</button>
      </header>
    </div>
  );
}

export default App;
