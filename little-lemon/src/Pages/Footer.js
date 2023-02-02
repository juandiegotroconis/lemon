import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";

function Footer(props) {
  const navigate = useNavigate();
  const contacts = ["Address", "Phone number", "Email"];
  const socialMedia = ["Instagram", "Facebook", "Twitter"];

  return (
    <footer className='footer'>
      <img
        src={require("../icons_assets/little-lemon.png")}
        alt=''
        className='footer-img'
        onClick={() => {
          navigate("/");
        }}
      />
      <ul className='categories'>
        {props.sections.map((sec) => {
          return (
            <Link to={`/${sec.url}`} key={`footer-${sec.name}`}>
              <li>{sec.name}</li>
            </Link>
          );
        })}
      </ul>
      <ul className='categories'>
        {contacts.map((contact) => {
          return (
            <Link to={`/${contact}`} key={contact}>
              <li>{contact}</li>
            </Link>
          );
        })}
      </ul>
      <ul className='categories'>
        {socialMedia.map((social) => {
          return (
            <Link to={`/${social}`} key={social}>
              <li>{social}</li>
            </Link>
          );
        })}
      </ul>
    </footer>
  );
}

export default Footer;
