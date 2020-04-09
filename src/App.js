import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home';
import Header from './components/navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <div className='App'>
        <Header />
        <Route exact path='/' component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
