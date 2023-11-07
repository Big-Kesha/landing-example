import React, { useEffect, useState } from 'react';
import productLink from '../../../Header/Header';
import hero from '../../../../img/hero.png'
import {getHeroData } from '../../../../api';

// export const CMS_URL = 'https://big-kesha.github.io/landing-example-strapi/'

export const CMS_URL = 'http://localhost:1337'

const Hero = ({setIsModalOpen}) => {
  const [heroData, setHeroData] = useState({
    header: '',
    paragraph: '',
    articleImage: '',
  })

  useEffect(() => {
    getHeroData()
    .then(({attributes}) => {
      setHeroData({
        header: attributes.header,
        paragraph: attributes.paragraph,
        articleImage: attributes.articleImage.data.attributes.url,
      })
    })
    .catch((e) => {console.log(e)})
  }, [])

  
  return (
    <section className='wrapper hero'>
          <div className="article">
            <div className="article-content">
              <h1 className="article-content__header">
                {
                  heroData.header 
                  ? heroData.header 
                  : 'Get More Done with whitepace'
                }                
              </h1>
              <p className="article-content__paragraph">
                {
                  heroData.paragraph 
                  ? heroData.paragraph 
                  : 'Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks'
                }
                
              </p>
              <div className="button-container button-container_left">
                <button onClick={() => setIsModalOpen(true)} className="cta-button button-normal">
                  <span href={productLink} className="cta-link">
                    Попробовать бесплатно
                  </span>
                </button>
              </div>
            </div>
            <div className="article__image">
              <img src={CMS_URL + heroData.articleImage} srcSet={hero} alt="" />
            </div>
          </div>
        </section>
  );
};

export default Hero;