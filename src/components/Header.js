import React, { Component } from 'react';
import './Header.css'
import profile from '../images/profile2.jpg'

//import logo from './logo.svg';
//import './App.css';

class Header extends Component {
  render() {
    return (
      <nav className='nav'>
          <div className="nav-wrapper">
              <img className='circle img'src={profile} />
              <a className="brand-logo text">
                  Anthony Cortez
              </a>
              <ul className="right hide-on-med-and-down">
                  <li>
                      <a className='text'>Projects</a>
                  </li>
                  <li>
                      <a className='text'>Platforms</a>
                  </li>
                  <li>
                      <a className='text'>BootCamp </a>
                  </li>
              </ul>    
          </div>
      </nav>
    )
  }
}

export default Header;
