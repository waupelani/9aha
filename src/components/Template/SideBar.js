import React from 'react';
import { Link } from 'react-router-dom';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/logo-9aha.png`} alt="" />
      </Link>
      <header>
        <h2>Modern Aesthetics and Beyond</h2>
      </header>
    </section>

    <section className="blurb">
      <h2>2021 Summer Collection</h2>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/about') ? <Link to="/about" className="button">Contact</Link> : <Link to="/" className="button">About 9AHA</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <p className="copyright">&copy; 9AHA 2021 <Link to="/">9aha.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
