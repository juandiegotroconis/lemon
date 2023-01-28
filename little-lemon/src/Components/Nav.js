import React from "react";

function Nav(props) {
  return (
    <nav>
      <img src={require("../icons_assets/Logo.png")} alt='' height={50} />
      <ul>
        {props.sections.map((sec) => {
          return (
            <a href={`/${sec}`} key={sec}>
              <li>{sec}</li>
            </a>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
