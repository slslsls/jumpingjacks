import React from 'react';
import '../App.css';
import Action from './Action';
import Table from './Table';
import Result from './Result';

function App() {
  return (
    <div className="App">
      <Table />
      <Action name="Raise" />
      <Action name="Call" />
      <Action name="Check" />
      <Action name="Fold" />
      <Result />
    </div>
  );
}

export default App;
