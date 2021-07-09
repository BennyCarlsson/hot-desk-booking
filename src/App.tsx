import React from 'react';
import './App.css';
import RoomGrid from './components/RoomGrid';
import * as Firebase from './services/Firebase'

function App() {
  Firebase.initFirebase();

  return (
    <div className="App">
      <h1>Hot Desk Booking</h1>
      <RoomGrid />
    </div>
  );
}

export default App;
