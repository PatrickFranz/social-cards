import React from 'react';
import '../css/blank-card.css';
import AddIcon from '../assets/images/add.png';
import ProfileImage from '../assets/images/placeholder_female1.png';

class BlankCard extends React.Component{
  constructor(){
    super();
    this.state = {
      clicked: false
    };
  }
  render(){
  
    if(!this.state.clicked){
      return(
        <div className="blank-card" 
              onClick={ (e) => {
                console.log('clickz');
                this.setState({
                  clicked:[...this.state.clicked, true]
                });
              }}>
          <img src={AddIcon} alt=""/>
        </div>
      );
    } else {
      return(
        <div className='card'>
          <div className="card-top">
            <div className="category">
              <input type="text" maxLength="3" placeholder="CAT"/>
            </div>
            <div className="headline">
              <textarea maxLength="48" rows="2" placeholder="Catchy Headline"/>
            </div>
            <div className="usr-profile">
              <span className="usr-name">
                <input type="text" placeholder="Username" />
              </span>
              <span className="usr-img">
                <input id='uploadProfileImage' type="file"/>
                <label htmlFor="uploadProfileImage">
                  <img src={ProfileImage} alt=""/>
                </label>
              </span>
            </div>
          </div>
          <div className="card-bottom">
            <div className="btm-headline">
              <span>headline</span>
            </div>
            <div className="btm-desc">
              <textarea maxLength='80' columns='30' rows="2" placeholder='Eyecatching description'></textarea>
            </div>
            <div className="link">
              <input type="text" placeholder="Url" />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default BlankCard;