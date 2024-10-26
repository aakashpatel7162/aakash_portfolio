import React, { useContext } from 'react';
import { FrameContext } from '../cart/FrameProvider';
import './frame.style.css';
import data from '../constant/data';

const Frame = () => {
  const { frameVisible, frameData, setContactInfo,clickFrameis } = useContext(FrameContext);
  if (!frameVisible) {
    return null;
  }
console.log(clickFrameis)
  const currentCartItem=data.skillSets[clickFrameis-1]
console.log(clickFrameis,"frma")
  const handleContactMeClick = () => {
    setContactInfo({
      name: frameData.name,
      type: frameData.type,
    });
  };

  return (
    <div className="frame-container">
      <div className="frame-content">
        <span className="frame-name">{currentCartItem.name}</span>
        <span className="frame-type">{currentCartItem.description}</span>

        <div className="frame-skills">
          <span className="title">Feature:</span>
          <ul>
            {currentCartItem.strengths?.map((skill, index) => (
              <li key={index} className="frame-skill-item">{skill}</li>
            ))}
          </ul>
        </div>

        {/* <div className="frame-deepPoints">
          <span>What we provide:</span>
          <ul>
            {currentCartItem.deepPoints?.map((point, index) => (
              <li key={index} className="frame-deepPoint-item">{point}</li>
            ))}
          </ul>
        </div> */}
        <div className="frame-deepPoints">
          <span className="title">What we provide:</span>
          <ul>
            {currentCartItem.offerings?.map((point, index) => (
              <li key={index} className="frame-deepPoint-item">{point}</li>
            ))}
          </ul>
        </div>
      </div>
      
      
      
      <button className='contact-btn' onClick={handleContactMeClick}>Contact me</button>
    </div>
  );
};

export default Frame;
