import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Personajes from './personajes';
import './styles.css';
import logo from '/Users/Sayuri Ramos/Desktop/expotl/tluds/src/resources/logo.png';


function Navigation() {
   return (
      <Router>
        <div className='custom-class'>
        <nav className="navbar navbar-expand-lg navbar-light navbar-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} alt="Logo" width="200px"/> {/* Add your logo */}
            </NavLink>
            <ul className="nav nav-pills ml-auto" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <NavLink className="nav-link" activeClassName="active" id="pills-home-tab" to="/about" role="tab" aria-controls="pills-home" aria-selected="true">Nosotros</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="navbar-line"></div>
      </div>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/personajes' element={<Personajes />} />
        </Routes>
      </Router>
      
    );};

export default Navigation;
