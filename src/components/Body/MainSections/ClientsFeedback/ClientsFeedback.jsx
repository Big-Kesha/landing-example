import React, {useEffect, useState} from 'react';
import { Carousel } from 'antd';
import { useMediaQuery } from 'react-responsive'
import FeedbackCard from './FeedbackCard';
import { getCustomersList } from '../../../../api';

import { CMS_URL } from '../Hero/Hero';





const ClientsFeedback = () => {
  const [consumers, setConsumers] = useState([])

  // const consumers = [
  //   {id: 1, name: 'Oberon Shaw, MCH1', avatarUrl: avatar},
  //   {id: 2, name: 'Oberon Shaw, MCH2'},
  //   {id: 3, name: 'Oberon Shaw, MCH3'},
  //   {id: 4, name: 'Oberon Shaw, MCH4'},
  // ]

  const isSmallScreen = useMediaQuery({query: '(max-width: 1024px)'})
  const isTinyScreen = useMediaQuery({query: '(max-width: 768px)'})

  let slidesToShow = 3
  if (isTinyScreen){
    slidesToShow = 1
  }else if(isSmallScreen) {
    slidesToShow = 2
  }

  useEffect(() => {
    getCustomersList().then((consumersList) => {
      setConsumers(consumersList)
      console.log(consumersList[0].name)
    })
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
              {consumers.map(({attributes}) => (
                <FeedbackCard 
                  key={attributes.id} 
                  personName={attributes.name}
                  avatarUrl={CMS_URL + attributes.avatar.data.attributes.url}
                  paragraph={attributes.paragraph}
                  personData={attributes.personData}
                />
              ))}
            </Carousel>
          </div>
    </section>
  );
};

export default ClientsFeedback;