import React from 'react';
import apps from '../../../../img/Apps.png'


const AppsSection = () => {
  return (
    <section className="apps wrapper">
    <div className="article article_customize">
      <div className="article__image article__image_no-bg">
        <img src={apps} alt="apps" />
      </div>
      <div className="article-content">
        <h1 className="article-content__header">
          Work with Your Favorite Apps Using whitepace
        </h1>
        <p className="article-content__paragraph">
          Whitepace teams up with your favorite software. 
          Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
        </p>
        <div className="button-container button-container_left">
          <button className="cta-button button-normal">
            <a href={'/'} className="cta-link">
              Узнать больше
            </a>
          </button>
        </div>
      </div>
    </div>
  </section>
  );
};

export default AppsSection;