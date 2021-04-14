import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const [nasaData, setNasaData] = useState([])
  useEffect(()=>{
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=")
    .then(res=>{
      setNasaData(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  },[])
  return (
    <div className="App">
      <nav>
       Nasa Photo of the Day <span role="img" aria-label='go!'>🚀</span>!
      </nav>
    </div>
  );
}

export default App;
