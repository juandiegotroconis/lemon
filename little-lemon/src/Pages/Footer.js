import React from "react";
import "./Footer.css";

function Footer(props) {
  const contacts = ["Address", "Phone number", "Email"];

  const socialMedia = ["Instagram", "Facebook", "Twitter"];
  return (
    <footer className='footer'>
      <img
        src={require("../icons_assets/Logo.png")}
        alt=''
        className='footer-img'
      />
      <ul className='categories'>
        {props.sections.map((sec) => {
          return (
            <a href={`/${sec}`} key={sec}>
              <li>{sec}</li>
            </a>
          );
        })}
      </ul>
      <ul className='categories'>
        {contacts.map((contact) => {
          return (
            <a href={`/${contact}`} key={contact}>
              <li>{contact}</li>
            </a>
          );
        })}
      </ul>
      <ul className='categories'>
        {socialMedia.map((social) => {
          return (
            <a href={`/${social}`} key={social}>
              <li>{social}</li>
            </a>
          );
        })}
      </ul>
    </footer>
  );
}

export default Footer;
