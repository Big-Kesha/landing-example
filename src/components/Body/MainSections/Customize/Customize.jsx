import React from 'react';
import productLink from '../../../Header/Header';
import puzzle from '../../../../img/puzzle.png'


const Customize = () => {
  return (
    <section className="customize wrapper">
          <div className="article article_customize">
            <div className="article-content">
              <h1 className="article-content__header">
              <div className="header-underlined">Customize</div> it to your needs
              </h1>
              <p className="article-content__paragraph">
                Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown).
                Or create your own scripts and plugins using the Extension API.
              </p>
              <div className="button-container button-container_left">
                <button className="cta-button button-normal">
                  <a href={productLink} className="cta-link">
                    Начать работу
                  </a>
                </button>
              </div>
            </div>
            <div className="article__image">
              <img src={puzzle} alt="" />
            </div>
          </div>
        </section>
  );
};

export default Customize;