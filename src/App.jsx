import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';
import useFetch from './Hooks/useFetch';
import Weather from './Component/Weather';

function App() {

  

  return (
    <div className="App">
      <Weather/>
    </div>
  )
}

export default App
