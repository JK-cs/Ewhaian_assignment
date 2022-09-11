import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Start from './components/Start';
import Play from './components/PlayGame';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/start" element={<Start />} />
                    <Route path="/play" element={<Play />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}



export default App;


