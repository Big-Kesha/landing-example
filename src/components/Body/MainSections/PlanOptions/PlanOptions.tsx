import React, { useState } from 'react';

enum planOption {
  free, 
  personal, 
  enterprise
}

const PlanOptions = () => {
  const optionStyleName = "plan-option"
  const activeOptionStyleName = optionStyleName + " plan-option_active"

  const [optionStyles, setoptionStyles] = useState({
    free: optionStyleName,
    personal: activeOptionStyleName,
    enterprise: optionStyleName
  })

  const handleChooseOption = (option: planOption) => {
    switch (option) {
      case planOption.free:
        setoptionStyles({
          free: activeOptionStyleName,
          personal: optionStyleName,
          enterprise: optionStyleName
        })
        break;
      case planOption.personal:
        setoptionStyles({
          free: optionStyleName,
          personal: activeOptionStyleName,
          enterprise: optionStyleName
        })
        break;
      case planOption.enterprise:
        setoptionStyles({
          free: optionStyleName,
          personal: optionStyleName,
          enterprise: activeOptionStyleName
        })
        break;
    }
  }


  return (
    <section className="choose-plan wrapper">
      <div className="choose-plan__head">
        <h1 className="choose-plan__header">
          Choose Your Plan
        </h1>
        <p className="choose-plan__description">
          Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Whitepace has the right plan for you.
        </p>
      </div>
      <div className="plan-options">
        <div 
          onClick={(e) => handleChooseOption(planOption.free)} 
          className={optionStyles.free}
        >
          <header className="plan-text">
            <p className="plan-name">
              Free
            </p>
            <h4 className="plan-price">
              0 ₽
            </h4>
            <p className="plan-motto">
              Capture ideas and find them quickly
            </p>
          </header>
          <ul className="plan-specs">
            <li className="plan-bullet-point">Sync unlimited devices</li>
            <li className="plan-bullet-point">10 GB monthly uploads</li>
            <li className="plan-bullet-point">200 MB max. note size</li>
            <li className="plan-bullet-point">Customize Home dashboard and access extra widgets</li>
            <li className="plan-bullet-point">Add due dates, reminders, and notifications to your tasks</li>
          </ul>
          <button className="start-button button-normal">
            Начать
          </button>
        </div>
        <div 
          onClick={(e) => handleChooseOption(planOption.personal)} 
          className={optionStyles.personal}
        >
          <header className="plan-text">
            <p className="plan-name">
              Personal
            </p>
            <h4 className="plan-price">
              1000 ₽
            </h4>
            <p className="plan-motto">
              Capture ideas and find them quickly
            </p>
          </header>
          <ul className="plan-specs">
            <li className="plan-bullet-point">Sync unlimited devices</li>
            <li className="plan-bullet-point">10 GB monthly uploads</li>
            <li className="plan-bullet-point">200 MB max. note size</li>
            <li className="plan-bullet-point">Customize Home dashboard and access extra widgets</li>
            <li className="plan-bullet-point">Add due dates, reminders, and notifications to your tasks</li>
          </ul>
          <button className="start-button button-normal">
            Начать
          </button>
        </div>
        <div 
          onClick={(e) => handleChooseOption(planOption.enterprise)} 
          className={optionStyles.enterprise}
        >
          <header className="plan-text">
            <p className="plan-name">
              Enterprise
            </p>
            <h4 className="plan-price">
              5000 ₽
            </h4>
            <p className="plan-motto">
              Capture ideas and find them quickly
            </p>
          </header>
          <ul className="plan-specs">
            <li className="plan-bullet-point">Sync unlimited devices</li>
            <li className="plan-bullet-point">10 GB monthly uploads</li>
            <li className="plan-bullet-point">200 MB max. note size</li>
            <li className="plan-bullet-point">Customize Home dashboard and access extra widgets</li>
            <li className="plan-bullet-point">Add due dates, reminders, and notifications to your tasks</li>
          </ul>
          <button className="start-button button-normal">
            Начать
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlanOptions;