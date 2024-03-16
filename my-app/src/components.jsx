// components.js
import React from 'react';
import './style.css';

export function NavBar() {
  return (
    <nav id="navBar" className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html">Moshir.dev</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/MoshirMoshir/Moshir.dev-React">Source Code</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="games.html">Games</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="piano.html">Piano</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="fireworks.html">Fireworks</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export function Footer({ visible }) {
  return (
    <footer id="footer-section" className={`footer ${visible ? 'footer-show' : 'footer-hide'}`} style={{ backgroundColor: "#242434", padding: "20px 0" }}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-12 text-center">
              <ul className="list-inline">
                <li className="list-inline-item"><a href="https://discord.com/users/333013440211976193"><i className="bi bi-discord icon"></i></a></li>
                <li className="list-inline-item"><a href="https://steamcommunity.com/id/moshirmoshir/"><i className="bi bi-steam icon"></i></a></li>
                <li className="list-inline-item"><a href="https://github.com/MoshirMoshir"><i className="bi bi-github icon"></i></a></li>
                <li className="list-inline-item"><a href="https://www.youtube.com/channel/UCIt3Oe3qG-pyD7fOiNVgN9g"><i className="bi bi-youtube icon"></i></a></li>
                <li className="list-inline-item"><a href="https://www.twitch.tv/moshirmoshir"><i className="bi bi-twitch icon"></i></a></li>
                <li className="list-inline-item"><a href="https://www.reddit.com/user/Moshir_"><i className="bi bi-reddit icon"></i></a></li>
                <li className="list-inline-item"><a href="https://twitter.com/moshirmoshir"><i className="bi bi-twitter icon"></i></a></li>
                <li className="list-inline-item"><a href="mailto:moshir@manasys.org"><i className="bi bi-envelope icon"></i></a></li>
              </ul>
              <p className="fine-text">©ManaSys.org All rights reserved.</p>
            </div>
          </div>
        </div>
    </footer>
  );
}
