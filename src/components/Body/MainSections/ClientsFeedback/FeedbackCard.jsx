import React from 'react';
import reviewSymbol from '../../../../img/review-symbol.svg'
import reserveAvatar from '../../../../img/Avatar.png'


const FeedbackCard = ({personName, avatarUrl, paragraph, personData}) => {

  
  return (
    <div className='feedback-card'>
      <div className="feedback-text">
        <img src={reviewSymbol} alt="" />
        <p className="feedback-text__paragraph">
          {paragraph ? paragraph : 'Whitepase is designed as a collaboration tool for businesses that is a full project management solution.'}
        </p>
      </div>
      <div className="person">
        <img src={avatarUrl} srcSet={reserveAvatar} alt="" className="person__avatar" />
        <div className="person-data">
          <h4 className="person-data__header">
            {personName}
          </h4>
          <p className="person-data__text">
            {personData ? personData : 'Head of Talent Acquisition, North America'}
          </p>
        </div>
      </div>

    </div>
  );
};

export default FeedbackCard;