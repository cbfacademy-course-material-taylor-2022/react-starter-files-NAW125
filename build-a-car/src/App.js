import './App.css';
import React from 'react'
import Car from './components/Car'
import Bicycle from './components/Bicycle';
import Truck from './components/Truck';
import Skateboard from './components/Skateboard';
import Bus from './components/Bus';
import Wheel from "./Wheel.js";
function App() {
  return (
    <div className="App">
      <Car numberofWheels="4"/>
      <Bicycle numberOfWheels="2"/>
      <Bus numberOfWheels="8"/>
      <Truck numberOfWheels="12"/>
      <Skateboard numberOfWheels="8"/>
    </div>
  );
}

export default App;
