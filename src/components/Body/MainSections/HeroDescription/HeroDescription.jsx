import React from 'react';
import workTogetherImage from '../../../../img/work-together-image.png'
import productLink from '../../../Header/Header';
import contextImg from '../../../../img/contest-image.png'


const HeroDescription = () => {
  return (
    <section className="hero-description wrapper">
          <div className="article article_light">
            <div className="article-content">
                <h1 className="article-content__header">
                  Project <div className="header-underlined">Management</div>
                </h1>
                <p className="article-content__paragraph">
                  Images, videos, PDFs and audio files are supported. 
                  Create math expressions and diagrams directly from the app. 
                  Take photos with the mobile app and save them to a note.
                </p>
                <div className="button-container button-container_left">
                  <button className="cta-button cta-button_light button-normal">
                    <a href={productLink} className="cta-link">
                      Начать работу
                    </a>
                  </button>
                </div>
            </div>
            <div className="article__image">
              <img src={contextImg} alt="" />
            </div>
          </div>
          <div className="article article_light article_reverse">
            <div className="article-content">
              <h1 className="article-content__header">
                <span className="header-underlined">Work together</span>
              </h1>
              <p className="article-content__paragraph">
                With whitepace, share your notes with your colleagues and collaborate on them. 
                You can also publish a note to the internet and share the URL with others.
              </p>
              <div className="button-container button-container_left">
                <button className="cta-button cta-button_light button-normal">
                  <a href={productLink} className="cta-link">
                    Попробуйте сами
                  </a>
                </button>
              </div>
            </div>
            <div className="article__image article__image_light">
                <img src={workTogetherImage} alt="Работать вместе" />
            </div>
          </div>
        </section>
  );
};

export default HeroDescription;