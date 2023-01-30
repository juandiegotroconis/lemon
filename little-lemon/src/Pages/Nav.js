import React, { useState } from "react";
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
            <a href={`/${sec}`} key={sec}>
              <li>
                <p className='section-category'>{sec}</p>
              </li>
            </a>
          );
        })}
      </ul>
      <div className='mobile-navbar' style={{ left: navbar ? "0%" : "-70%" }}>
        <p className='section-category'>Menu</p>
        <ul className='mobile-categories'>
          {props.sections.map((sec) => {
            return (
              <a href={`/${sec}`} key={sec}>
                <li>
                  <p className='section-category'>{sec}</p>
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
