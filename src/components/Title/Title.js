import React from "react";
import "./Title.css";

const Title = props => (
  //Let's wrap the title in a container that will be returned
  <div className="TitleContainer">
    <h1 className="title">{props.children}</h1>
     
    <div className="gameScore">
      <div className="currentScore">Score: {props.score} </div>
      <div className="scoreMessage">{props.message} </div>
      <div className="highScore">Highscore: {props.highscore}</div>
    </div>
  </div>
);

export default Title;
