// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  // class App extends React.Component{
  //   render() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [textColor, setTextColor] = useState('dark');


  const colorList = ['primary','warning','danger','success','info','secondary','dark','light'];
  const textColorList = ['light','default','info','warning','dark','light','light','dark'];

  const addAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => setAlert(null), 2000);
  }

  const toggleMode = (cls) => {
    // if(cls !== null)
    // {
      console.log(cls);
      setMode(colorList[cls]);
      setTextColor(textColorList[cls]);

      colorList.forEach((e)=>{
        document.body.classList.remove('bg-'+e);
      })
      document.body.classList.add('bg-'+colorList[cls]);

      const accordions = document.getElementsByClassName('accordion-button');
      for(let i = 0; i < accordions.length; ++i)
      {
        console.log(accordions[i]);
      }
    // }
    // else{
    //   if (mode === 'dark') {
    //     setMode('light');
    //     document.body.style.backgroundColor = 'white';
    //     addAlert("Light Mode has been enabled", "success");
    //   }
    //   else {
    //     setMode('dark');
    //     document.body.style.backgroundColor = 'rgb(20, 34, 78)';
    //     addAlert("Dark Mode has been enabled", "success");
    //   }
    // }
  };


  return (
    <div className={`text-${textColor}`}>
    <Router>
      <Navbar title={'Text Analyzer'} mode={mode} toggleMode={toggleMode} colorList={colorList} />
      {document.body.classList.add('bg-gradient','bg-opacity-90')}
      <Alert alert={alert}/>
      <Switch>
        <Route path="/about">
          <About mode={mode} />
        </Route>
        <Route path="/">
          <TextForm heading="Enter your text Here:" mode={mode} addAlert={addAlert} />
        </Route>
      </Switch>
    </Router>
    </div>
  );
  // }
}

export default App;
