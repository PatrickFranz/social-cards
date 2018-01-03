import React from 'react';
import '../css/card.css';

const Card = (props) => {
  return(
    <div className='card'>
      <div className="card-top">
        <div className="category">
          <span>{props.category}</span>
        </div>
        <a href={props.link}>
          <div className="headline">
            <span>{props.headline}</span>
          </div>
        </a>
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
          <a href={props.link} target="_blank" ><span>{props.link}</span></a>
        </div>
      </div>
    </div>
  );
}

export default Card;