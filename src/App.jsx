import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';
import useFetch from './useFetch';
import Weather from './Weather';

function App() {

  

  return (
    <div className="App">
      <Weather/>
    </div>
  )
}

export default App
