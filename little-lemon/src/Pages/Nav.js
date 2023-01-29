import React from "react";
import "./Nav.css";

function Nav(props) {
  return (
    <nav className='navbar'>
      <img
        src={require("../icons_assets/Logo.png")}
        alt='Little Lemon Logo'
        className='navbar-img'
      />
      <img
        src={require("../icons_assets/menu.png")}
        alt=''
        className='menu-icon'
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
    </nav>
  );
}

export default Nav;
