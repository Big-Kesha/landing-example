import React from 'react';
import './Footer.sass'
import twitter from '../../img/Twitter.svg'

const Footer = () => {
  return (
    <footer className="footer wrapper">
      <div className="footer-bottom">
        <ul className="info">
          <li className="info__item">Русский</li>
          <li className="info__item">Terms & privacy</li>
          <li className="info__item">Security</li>
          <li className="info__item">Security</li>
          <li className="info__item">©2021 Whitepace LLC.</li>
        </ul>
        <ul className="social">
          <li className="social__item">
            <a href="/">
              <img src={twitter} alt="" />
            </a>
          </li>
          <li className="social__item">
            <a href="/">
              <img src={twitter} alt="" />
            </a>
          </li>
          <li className="social__item">
            <a href="/">
              <img src={twitter} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;