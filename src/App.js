import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
 
import "./App.css";

const people = require('./people.js')

class App extends Component {
  // Setting this.state.friends to the friends json array
  // adding currentScore, highScore

  constructor(props) {
    super(props);

    this.state = {
      friends,
      currentScore: 0,
      highScore: 0,
      currentMessage : ''
     };
  }
  
 
  clickCounter = id => {
    //What do I do when the card is clicked
    // When a card is clicked, increment the count.
    //First I need to find the element
    this.state.friends.find( (friend, index) => {
      if(friend.id == id){
        // If this has not been previously selected, the count should be 0
        if(friends[index].count === 0){
          //Increment the count
          friends[index].count++;
          //Now set the state
          this.setState({score: this.state.currentScore++, currentMessage : 'Doing Great, Try Again!'}, function(){
            //Validate the change in score
            console.log(this.state.currentScore);
          });
          //Let's sort the cards - fun fun
          this.state.friends.sort(() => Math.floor(Math.random() * friends.length));
          return true;

        }else{
          // the count value was not 0 when it was clicked again :-(
          this.gameWon();
        }
      }  

    });

    
  };

  gameWon = () => {
    // How do I know the game has been won/lost
    //If this function is called from clickCounter, then the card was clicked twice
    //Is this score better than previous high score
    if(this.state.currentScore > this.state.highScore){
      this.setState( {highScore : this.state.currentScore}, function(){
        //Validate change in high score
        console.log(this.state.highScore);
      });
    }
 
    
    this.setState({currentMessage : 'Sorry, Game Over!'}, function(){
      //Validate the change in score
      console.log(this.state.currentScore);
    });
    //Reset counter for each card
    this.state.friends.forEach( friend => {
      friend.count = 0;
    });
    this.setState({currentScore: 0});
    return true;
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title message={this.state.currentMessage} score= {this.state.currentScore} highscore= {this.state.highScore}>Changing the Game
        <br/>Some of Today's Brightest Scientists
        </Title>
        {this.state.friends.map(friend => (
          <FriendCard

            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            countClick={this.clickCounter}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
