// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  // class App extends React.Component{
  //   render() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const addAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => setAlert(null), 2000);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      addAlert("Light Mode has been enabled", "success");
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(20, 34, 78)';
      addAlert("Dark Mode has been enabled", "success");
    }
  };


  return (
    <>
      <Navbar title={'Text Analyzer'} mode={mode} toggleMode={toggleMode} />
      <TextForm heading="Enter your text Here:" mode={mode} toggleMode={toggleMode} alert={alert} addAlert={addAlert} />
    </>
  );
  // }
}

export default App;
