import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className='navbar'>
      <img
        src={require("../icons_assets/Logo.png")}
        alt='Little Lemon Logo'
        className='navbar-img'
      />
      <img
        src={require(`../icons_assets/${navbar ? "x" : "menu"}.png`)}
        alt=''
        className='menu-icon'
        onClick={() => {
          setNavbar(!navbar);
        }}
      />
      <ul className='categories'>
        {props.sections.map((sec) => {
          return (
            <Link key={`nav-${sec.name}`} to={`/${sec.url}`}>
              <li>
                <p className='section-category'>{sec.name}</p>
              </li>
            </Link>
          );
        })}
      </ul>
      <div className='mobile-navbar' style={{ left: navbar ? "0%" : "-70%" }}>
        <p className='section-category'>Menu</p>
        <ul className='mobile-categories'>
          {props.sections.map((sec) => {
            return (
              <Link key={`mobile-nav${sec.name}`} to={`/${sec.url}`}>
                <li>
                  <p className='section-category'>{sec.name}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
