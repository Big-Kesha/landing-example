import React from 'react';
import closeIcon from '../../img/close.png'
import './ModalForm.css'


const ModalForm = ({setIsModalOpen}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    console.log('отправка формы');
  }

  return (
    <div className='modal'>
      <header className='modal-header modal-wrapper'>
      <h1 className='modal-header__title'>
          Заказать услугу
        </h1>
        <button onClick={() => setIsModalOpen(false)} className='modal-header__close-button'>
          <img src={closeIcon} alt="Закрыть форму" />
        </button>
      </header>
      <main className='modal-body'>
        <form className='modal-form modal-wrapper' onSubmit={(e) => handleSubmit(e)}>
          <div className="modal-form__data-group">
            <div className="modal-form__input-group">
              <label className='modal-form__label' htmlFor="name">Имя Фамилия Отчество</label>
              <input className='modal-form__input' type="text" id='name'/>
            </div>

            <div className="modal-form__input-group">
              <label className='modal-form__label' htmlFor="e-mail">Адрес электронной почты</label>
              <input className='modal-form__input' type="text" id='e-mail'/>
            </div>

            <div className="modal-form__input-group">
              <label className='modal-form__label' htmlFor="number">Номер телефона</label>
              <input className='modal-form__input' type="number" id='number'/>
            </div>
          </div>

          <div className="modal-form__submit-group">
            <input className='modal-form__input_submit' type="submit" value="Заказать"/>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ModalForm;