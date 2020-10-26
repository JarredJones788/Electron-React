import React from 'react';
import './App.css';

const { ipcRenderer } = window.require('electron');

function App() {
  return (
    <div className="App">
      <h1>Hello this has been Updated!</h1>
      <button onClick={() => { ipcRenderer.send('test', 'ping'); }}>Test</button>
    </div>
  );
}

export default App;
