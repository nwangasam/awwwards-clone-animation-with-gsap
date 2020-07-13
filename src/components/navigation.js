import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='nav'>
      <div className='container'>
        <div className='nav-columns'>
          <div className='nav-column'>
            <div className='nav-label'>Menu</div>
            <ul className='nav-links'>
              <li>
                <NavLink to='/case-studies' exact>
                  Case Studies
                </NavLink>
              </li>
              <li>
                <NavLink to='/approach' exact>
                  Approach
                </NavLink>
              </li>
              <li>
                <NavLink to='/services' exact>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to='/about-us' exact>
                  About us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='nav-column'>
            <div className='nav-label'>Contact</div>
            <div className='nav-infos'>
              <ul className='nav-info'>
                <li className='nav-info-label'>Email</li>
                <li>
                  <NavLink to='/contact'>Get in touch with us</NavLink>
                </li>
                <li>
                  <NavLink to='/audit'>Get a free audit</NavLink>
                </li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Headquarters</li>
                <li>Works Layout</li>
                <li>168 Odunna Cresent Street</li>
                <li>Nigeria</li>
                <li>
                  <NavLink to='/audit'>Get a free audit</NavLink>
                </li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Phone</li>
                <li>+234 (0) 81 171 130 294</li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Legal</li>
                <li>Privacy and Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
