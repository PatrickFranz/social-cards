import React from 'react';
import Card from './Components/Card.js';

export default class App extends React.Component{
  render(){
    return(
      <div className="container">
        <Card category='DEV' headline="Learning React? Start here!"/>
      </div>
    );
  }
}