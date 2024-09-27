import React from 'react';
import './App.css';
import Overhead from './component/Overhead';
import Top from './component/Top';
import Midpara from './component/Midpara';
import Bodylight from './component/Bodylight';
import Footer from './component/Footer';
import { Route, Routes } from 'react-router-dom';

import { useState } from 'react';
import NextPage from './component/NextPage';

function App() {
  const [darkmode, setdarkmode] = useState(false);

  const toggleMode = () => {
    setdarkmode(prevMode => !prevMode);
  }

  return (
    <>
      <div className={`app-container ${darkmode ? 'dark-mode' : 'light-mode'}`}>
        <button className="btn toggle-btn" onClick={toggleMode}>
          {darkmode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
        <div className='d-flex flex-column justify-content-between'>
          <Routes>
            <Route path="/nextpage" element={
              <div className='d-flex flex-column justify-content-between'>
          <Top />
          <Overhead />
          <Midpara />
          <Bodylight />
          </div>
            }/>
            <Route path="/nextpage" element={<NextPage />} />
          </Routes>
          <footer className="bg-body-tertiary text-center">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
