import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Navbar(props) {
// class App extends React.Component{
//   render() { 
    return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className={`dropdown-menu dropdown-menu-${props.mode}`}>
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <div className="d-flex mx-2">
              {props.colorList.map((el,index)=>{
                return (<div key={index} className={`bg-${el} rounded mx-1`} onClick={()=>{props.toggleMode(index)}} style={{height:"1rem", width:"1.8vw", border:"1px solid black", cursor:'pointer'}}></div>);
              })}
            </div>
            {/* <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="modeSwitch" onClick={()=>{props.toggleMode(null)}} />
              <label className={`form-check-label text-${props.mode === 'dark' ? 'light':'dark'}`} htmlFor="modeSwitch">Enable {props.mode === 'dark' ? 'light':'dark'} Mode</label>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
  // }
}

Navbar.defaultProps = {
  title: "Hello World!!",
  mode: 'light'
}

Navbar.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.string
}

export default Navbar;