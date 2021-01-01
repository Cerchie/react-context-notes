import React, {useState} from 'react';
import ThemeContext from './ThemeContext'
import ThemeProvider from './ThemeProvider'
import Child from './Family/Child'
import NavBar from './NavBar'
import './App.css';

function App() {

  return (
    <div className="App">
        <ThemeProvider>
        <NavBar />
        <Child />
        </ThemeProvider>

    </div>
  );
}

export default App;
