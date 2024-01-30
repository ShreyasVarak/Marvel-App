// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Main from './Components/Main';
import Card from './Components/Card';
import './Components/style.css';
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import Marvel from './Components/Marvel';

function App() {
  return (
    <>
      <BrowserRouter>
      {/* <App/> */}
  


      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/:id' element={<Marvel/>}/>
      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
