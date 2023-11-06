import React, {useEffect, useState} from 'react';
import { Carousel } from 'antd';
import { useMediaQuery } from 'react-responsive'
import FeedbackCard from './FeedbackCard';
import { getCustomersList } from '../../../../api';

import { CMS_URL } from '../Hero/Hero';





const ClientsFeedback = () => {
  const [consumers, setConsumers] = useState([])

  const consumersFallBack = [
    {id: 1, name: 'Oberon Shaw, MCH1',},
    {id: 2, name: 'Oberon Shaw, MCH2'},
    {id: 3, name: 'Oberon Shaw, MCH3'},
    {id: 4, name: 'Oberon Shaw, MCH4'},
  ]

  const isSmallScreen = useMediaQuery({query: '(max-width: 1024px)'})
  const isTinyScreen = useMediaQuery({query: '(max-width: 768px)'})

  let slidesToShow = 3
  if (isTinyScreen){
    slidesToShow = 1
  }else if(isSmallScreen) {
    slidesToShow = 2
  }

  useEffect(() => {
    getCustomersList()
    .then((consumersList) => {
      setConsumers(consumersList)
      console.log(consumersList[0].name)
    })
    .catch((e) => {console.log(e)})
  }, [])

  return (
    <section className="clients-feedback wrapper">
          <h1 className="clients-header">
            What Our Clients Say
          </h1>
          <div className="feedback-container">
            <Carousel 
              autoplay 
              arrows
              dotPosition={'bottom'}
              dots={true}
              slidesToShow={slidesToShow}
            >
              {consumers && consumers.map((consumer) => (
                <FeedbackCard 
                  key={consumer.attributes.id} 
                  personName={consumer.attributes.name}
                  avatarUrl={CMS_URL + consumer.attributes.avatar.data.attributes.url}
                  paragraph={consumer.attributes.paragraph}
                  personData={consumer.attributes.personData}
                />
              ))
              }
              {
                consumersFallBack.map((consumer) => (
                  <FeedbackCard 
                    key={consumer.id} 
                    personName={consumer.name}
                  />
                ))
              }
            </Carousel>
          </div>
    </section>
  );
};

export default ClientsFeedback;