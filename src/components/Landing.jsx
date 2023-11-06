import React, { useState } from 'react';
import './Landing.sass'
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import ModalForm from './Modal/ModalForm';


const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className='landing'>
      <Header setIsModalOpen={setIsModalOpen}/>
      <Body setIsModalOpen={setIsModalOpen}/>
      <Footer setIsModalOpen={setIsModalOpen}/>
      {
        isModalOpen &&
        <ModalForm setIsModalOpen={setIsModalOpen}/>
      }
    </div>
  );
};

export default Landing;