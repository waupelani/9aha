import React from 'react';
import { Link } from 'react-router-dom';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/logo.webp`} alt="" />
      </Link>
      <header>
        <h2>Hi, I&apos;m Claire 👋🏼</h2>
      </header>
    </section>

    <section className="blurb">
      <h2>Just another shopaholic&apos;s blog</h2>
      <h2>TikTok@Waupelani</h2>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/about') ? <Link to="/about" className="button">About Me</Link> : <Link to="/" className="button">Today&apos;s Deal</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <p className="copyright">&copy; 9AHA 2021 <Link to="/">9aha.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
