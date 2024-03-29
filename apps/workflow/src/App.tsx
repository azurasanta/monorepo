import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from "@monorepo/shared"
import { Rating, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button label="This Button is from @shared/atoms" onClick={() => { console.log("hello") }} />

        <div>
          <Rating name="disabled" value={3} disabled />
          <Typography component="legend">This is MUI component</Typography>
        </div>
      </header>
    </div>
  );
}

export default App;
