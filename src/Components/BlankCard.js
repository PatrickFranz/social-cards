import React from 'react';
import '../css/blank-card.css';
import AddIcon from '../assets/images/add.png';
import ProfileImage from '../assets/images/placeholder_female1.png';

class BlankCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      clicked: false
    };
  }

  addThisCard(){
    this.setState({
      clicked: false
    });
    this.props.addCard(this.newCard);
  }


  componentDidMount(){
    document.addEventListener('keyup', (e) => {
      if(e.keyCode === 13){
        this.addThisCard();
      }
    });
  }

  componentWillUnmount(){

  }

  render(){
    this.newCard = { 
      "id": this.props.cards.length,
      "category" : "DEV",
      "username" : "Anonymous",
      "userImg" : ProfileImage,
      "headline" : "Check this out!",
      "desc" : "Isn't that amazing?",
      "link" : "www.google.com"
    };
    if(!this.state.clicked){
      return(
        <div className="blank-card" 
              onClick={ (e) => {
                this.setState({
                  clicked: true
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
              <input type="text" 
                     maxLength="3" 
                     placeholder="CAT"
                     onChange={ (e) => this.newCard.category = e.target.value}
              />
              <input type="submit" 
                     value="ADD"
                     onClick={(e) => {
                       e.preventDefault();
                       this.addThisCard();
                     }}
                       />
            </div>
            <div className="headline">
              <textarea maxLength="48" 
                        rows="2" 
                        placeholder="Catchy Headline"
                        onChange={ (e) => this.newCard.headline = e.target.value}
                        />
            </div>
            <div className="usr-profile">
              <span className="usr-name">
                <input type="text" 
                        maxLength="20" 
                        placeholder="Username"
                        onChange={ (e) => this.newCard.username = e.target.value || "Anonymous"}
                />
              </span>
              <span className="usr-img">
                <input type="url" 
                        placeholder='Image URL'
                        onChange={ (e) => this.newCard.userImg = e.target.value}
                        />
              </span>
            </div>
          </div>
          <div className="card-bottom">
            <div className="btm-headline">
              <span></span>
            </div>
            <div className="btm-desc">
              <textarea maxLength='80' 
                        columns='30' 
                        rows="2" 
                        placeholder='Eyecatching description'
                        onChange={ (e) => this.newCard.desc = e.target.value}>
              </textarea>
            </div>
            <div className="link">
              <input type="url"
                      maxLength="48" 
                      placeholder="Url"
                      onChange={ (e) => this.newCard.link = e.target.value} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default BlankCard;