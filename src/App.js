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
  state = {
    friends,
    currentScore: 0,
    highScore: 0
  };

  clickCounter = id => {
    //What do I do when the card is clicked
  };

  gameWon = () => {
    // How do I know the game has been won/lost
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title score={this.state.currentScore} highscore={this.state.highScore}>Changing the Game</Title>
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
