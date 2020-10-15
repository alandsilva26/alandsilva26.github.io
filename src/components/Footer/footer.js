import React from "react";
import { Link } from "react-router-dom";
// import myData from "../../data/my-data";

function Footer() {
  return (
    <footer className="page-footer font-small blue pt-4">
      <div className="container">
    
        <div className="row">
        <div className="col-md-4">
          <ul className="list-group">
            <span className="title">Attributions</span>
            <li className="list-group-item">
            <a href="https://www.freepik.com/vectors/road" target="_blank" rel="noopener noreferrer">
              Road vector created by upklyak - www.freepik.com
            </a>
            </li>
          </ul>
        </div>
          <div className="col-md-3">
            <ul className="list-group">
            <span className="title">Navigation</span>
              <li className="list-group-item">
                <Link to="/">Home</Link>
              </li>
              <li className="list-group-item">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="list-group-item">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-5">
            <ul className="list-group">
            <span className="title">Connect with me</span>
              <li className="list-group-item">
                Github - <a href="https://github.com/alandsilva26/">https://github.com/alandsilva26</a>
              </li>
              <li className="list-group-item">
              Linkedin - <a href="https://www.linkedin.com/in/alan-dsilva-289b77170/">https://www.linkedin.com/in/alan-dsilva-289b77170/</a>
              </li>
              <li className="list-group-item">
                Email - <a href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=alandsilva2001@gmail.com`} target="_blank" rel="noopener noreferrer">alandsilva2001@gmail.com</a>
              </li>
              <li className="list-group-item">
                Codechef - <a href="https://www.codechef.com/users/deathbringer26">https://www.codechef.com/users/deathbringer26</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          <small>
            © 2020 Copyright:
            <a href="https://www.linkedin.com/in/alan-dsilva-289b77170/">
              &nbsp;Alan Dsilva 
            </a> - alandsilva2001@gmail.com
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
