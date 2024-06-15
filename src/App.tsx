import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Home}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
