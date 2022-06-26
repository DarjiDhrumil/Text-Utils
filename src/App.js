import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import About from './components/About';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not


  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500);
  }



  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils -  Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils -  Light Mode';
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText = "About TextUtils"/> */}
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <Routes> */}
          {/* <Route path="/about" element={<About/>}/> */}
          {/* <Route path="/" element={<TextForm heading = "Enter the text to analyze below" mode={mode}/>}/> */}
          <TextForm heading = "Enter the text to analyze below" mode={mode}/>
      {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
