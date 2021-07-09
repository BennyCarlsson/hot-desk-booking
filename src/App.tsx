import React from 'react';
import './App.css';
import RoomGrid from './components/RoomGrid';
import AppRouter from "./components/navigation/AppRouter";

function App() {
  return (
    <div className="App">
      <h1>Hot Desk Booking</h1>

      <RoomGrid/>
      <AppRouter/>
    </div>
  );
}

export default App;
