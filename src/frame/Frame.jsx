import React, { useContext } from 'react';
import { FrameContext } from '../cart/FrameProvider';
import './frame.style.css';
import data from '../constant/data';

const Frame = () => {
  const { frameVisible,clickFrameis } = useContext(FrameContext);
  if (!frameVisible) {
    return null;
  }
  const currentCartItem=data.skillSets[clickFrameis-1]
 
  return (
    <div className="frame-container">
      <div className="frame-content">
        <h4 className="frame-name">{currentCartItem.name}</h4>
        <h5 className="frame-type">{currentCartItem.description}</h5>

        <div className="frame-skills">
          <h6>Feature:</h6>
          <ul>
            {currentCartItem.strengths?.map((skill, index) => (
              <li key={index} className="frame-skill-item">{skill}</li>
            ))}
          </ul>
        </div>

       
        <div className="frame-deepPoints">
          <span className="title">What we provide:</span>
          <ul>
            {currentCartItem.offerings?.map((point, index) => (
              <li key={index} className="frame-deepPoint-item">{point}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <button className='contact-btn' onClick={()=>window.scroll({top:2700, behavior:"smooth"})}>Contact with Expert</button>
    </div>
  );
};

export default Frame;
