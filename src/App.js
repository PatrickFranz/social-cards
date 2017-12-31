import React from 'react';
import Card from './Components/Card.js';
import BlankCard from './Components/BlankCard';
import sampleData from './sampleData.json';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.addCard = this.addCard.bind(this);
    this.state = {
      cardStack: sampleData
    }
  }

  addCard(event, newCard){
    event.preventDefault();
    this.setState({
      cardStack : [...this.state.cardStack, newCard]
    });
  }

  populateSampleData(){
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
        {this.populateSampleData()}
        <BlankCard addCard={this.addCard}
                    cards={this.state.cardStack}/>
      </div>
    );
  }
}