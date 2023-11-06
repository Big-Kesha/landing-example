import React from 'react';
import apple from '../../../../img/Apple.png'
import microsoft from '../../../../img/Microsoft.png'
import slack from '../../../../img/Slack.png'
import google from '../../../../img/Google.png'

const Sponsors = () => {
  return (
    <section className="sponsors wrapper">
          <h1 className="sponsors-header">
            Our <div className="header-underlined">sponsors</div>
          </h1>
          <ul className="sponsors-list">
            <li className="sponsor-logo"><img src={apple} alt="apple" /></li>
            <li className="sponsor-logo"><img src={microsoft} alt="microsoft" /></li>
            <li className="sponsor-logo"><img src={slack} alt="slack" /></li>
            <li className="sponsor-logo"><img src={google} alt="google" /></li>
          </ul>
        </section>
  );
};

export default Sponsors;