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
      </div>
      <div className="card-bottom">
        <p>Bottom</p>
      </div>
    </div>
  );
}

export default Card;