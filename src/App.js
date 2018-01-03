import React from 'react';
import Card from './Components/Card.js';
import BlankCard from './Components/BlankCard';
import sampleData from './sampleData.json';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.addCard = this.addCard.bind(this);
    this.showData = this.showData.bind(this);

    this.state = {
      cardStack: JSON.parse(localStorage.getItem('cardStack')) || sampleData
    };
  }

  addCard(newCard){
    console.log(newCard);
    //Set the state and, once state is updated (using setState callback), add state to localStorage.
    this.setState({ cardStack : [...this.state.cardStack, newCard] }
      , () => localStorage.setItem('cardStack',JSON.stringify(this.state.cardStack)))
  }

  showData(){
    const cards = this.state.cardStack.map( (card) => {
      return(
      <Card key={card.id}
            category={card.category}
            username={card.username}
            userImg={card.userImg}
            headline={card.headline}
            desc={card.desc}
            link={card.link}/>
      )
    }); 
    return cards;
  }

  render(){
    return(
      <div className="container">
        {this.showData()}
        <BlankCard addCard={this.addCard}
                   cards={this.state.cardStack}
                   />
      </div>
    );
  }
}