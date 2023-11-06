import React from 'react';
import productLink from '../Header/Header';

import './Body.sass'
import PlanOptions from './MainSections/PlanOptions/PlanOptions';
import ClientsFeedback from './MainSections/ClientsFeedback/ClientsFeedback';
import { ConfigProvider } from 'antd';
import Hero from './MainSections/Hero/Hero';
import HeroDescription from './MainSections/HeroDescription/HeroDescription';
import Customize from './MainSections/Customize/Customize';
import Sponsors from './MainSections/Sponsors/Sponsors';
import AppsSection from './MainSections/AppsSection/AppsSection';



const Body = ({setIsModalOpen}) => {

  
  return (
    <main className='main'>
        <Hero setIsModalOpen={setIsModalOpen}/>
        <HeroDescription/>
        <Customize/>        
        <PlanOptions/>
        <Sponsors/>
        <AppsSection/>
       
        <ConfigProvider theme={{
          components: {
            Carousel: {
              dotHeight: '20px'
            },
          },
          token: {
            controlHeightLG: '100px'
          }
        }}>
          <ClientsFeedback/>
        </ConfigProvider>
      </main>
  );
};

export default Body;