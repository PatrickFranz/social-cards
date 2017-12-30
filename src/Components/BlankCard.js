import React from 'react';
import '../css/blank-card.css';
import AddIcon from '../assets/images/add.png';

const BlankCard = (props) => {
  return(
    <div className="blank-card">
      <img src={AddIcon} alt=""/>
    </div>
  );
}

export default BlankCard;