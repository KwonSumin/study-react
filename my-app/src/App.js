import React from 'react';
import logo from './logo.svg';
import './App.css';

import Route from "./components/Route";

function App() {
  fetch('/api')
  .then(res=>res.json())
  .then(data=>console.log({username:data.username}));

  const app = (
    <div className="App">
      app
      <Route/>
    </div>
  )
  return (
    app
  );
}

export default App;
