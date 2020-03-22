import React from 'react';
import './App.css';
import Address from './components/Address';
import CondoBoard from './components/CondoBoard';
import RecentAnnouncements from './components/RecentAnnouncements';

function App() {
  return (
    <div id="App_Grid">
      <div id="App_Intro">
        <h1 id="App_Title">Paseo del Bosque</h1>
        <p>
          Aquí encontrará información general del complejo y los eventos y
          reportes más recientes.
        </p>
      </div>

      <Address />
      {/* <CondoBoard /> */}
      <RecentAnnouncements />
    </div>
  );
}

export default App;
