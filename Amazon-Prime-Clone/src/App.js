
import './App.css';
import React from 'react';

import MainPage from './Components/Main_Page/MainPage';
import Login from './Components/Login/Login';
import VideosPage from './Components/Videos_page/VideosPage';

import { Routes, Route, Router } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/videos" element={<VideosPage />} />
      </Routes>

    </div>

  );
}

export default App;
