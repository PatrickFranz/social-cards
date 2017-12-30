import React from 'react';
import Card from './Components/Card.js';
import BlankCard from './Components/BlankCard';
import sampleData from './sampleData.json';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sampleData: sampleData
    }
  }

  populateSampleData(){
    const cards = sampleData.map( (card) => {
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
        <BlankCard />
      </div>
    );
  }
}