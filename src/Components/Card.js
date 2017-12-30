import React from 'react';
import '../css/card.css';

const Card = (props) => {
  return(
    <div className='card'>
      <div className="card-top">
        <div className="category">
          <span>{props.category}</span>
        </div>
        <div className="headline">
          <span>{props.headline}</span>
        </div>
        <div className="usr-profile">
          <span className="usr-name">
            {props.username}
          </span>
          <span className="usr-img">
            <img src={props.userImg} alt=""/>
          </span>
        </div>
      </div>
      <div className="card-bottom">
        <div className="btm-headline">
          <span>{props.headline}</span>
        </div>
        <div className="btm-desc">
        <span>{props.desc}</span>
        </div>
        <div className="link">
        <span>{props.link}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;