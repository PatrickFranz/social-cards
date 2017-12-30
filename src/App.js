import React from 'react';
import Card from './Components/Card.js';

export default class App extends React.Component{
  render(){
    return(
      <div className="container">
        <Card category='DEV'
              username='Patrick Franz'
              userImg='https://pbs.twimg.com/profile_images/725351458816708608/6rVKB93i_400x400.jpg'
              headline="Learning React? Start here!"
              desc="Pry yourself away from tutorials! Learn React the right way."
              link="www.tco.com"/>
        <Card category='PUG'
              username='Everest Franz'
              userImg='http://i.dailymail.co.uk/i/pix/2007/04_03/EverestDM0105_468x330.jpg'
              headline="Cuddle PUGS! ALL.DAMN.DAY!!"
              desc="Just love the pug. You know you want to. Blah blah blah"
              link="www.pug.com"/>
      </div>
    );
  }
}