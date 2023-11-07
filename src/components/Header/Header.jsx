import React, { useState } from 'react';
import logo from '../../img/logo.svg'
import burger from '../../img/burger.png'
import './Header.sass'


export const productLink = '/'


const Header = ({setIsModalOpen}) => {
  let [isNav, setIsNav] = useState(false)

  const showNav = () => {
    console.log(isNav);
    setIsNav(!isNav)
  }

  return (
    <header className="header wrapper">
        <a href='/' className="logo">
          <img src={logo} alt="логотип" className='logo__image'/>
          <span className="logo__text">whitepace</span>
        </a>
        <div className="navigation-container">
          {
            !isNav &&
            <nav className="navigation">
              <ul className={'navigation__list hidden'}>
                <li className="navigation__item"><a href="/">Товары</a></li>
                <li className="navigation__item"><a href="/">Решения</a></li>
                <li className="navigation__item"><a href="/">Ресурсы</a></li>
                <li className="navigation__item"><a href="/">Цены</a></li>
              </ul>
            </nav>
          }
          {
            isNav &&
            <nav className="navigation">
              <ul className={'navigation__list'}>
                <li className="navigation__item"><a href="/">Товары</a></li>
                <li className="navigation__item"><a href="/">Решения</a></li>
                <li className="navigation__item"><a href="/">Ресурсы</a></li>
                <li className="navigation__item"><a href="/">Цены</a></li>
              </ul>
            </nav>
          }
          <div className="buttons-group">
            <button className="login-button button-normal">
              Войти
            </button>
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="cta-button cta-button_header button-normal"
            >
              <span href={productLink} className="cta-link">
                Попробовать бесплатно
              </span>
            </button>
          </div>
          <div onClick={() => showNav()} className="navigation-container__burger">
            <img src={burger} alt="" />
          </div>
        </div>
      </header>
  );
};

export default Header;