import React, { Component } from "react";
import marioCharacters from "./../data/MarioWorldCharacters.json";
class Characters extends Component {
  state = { characters: [] };

  componentDidMount() {
    this.setState({ characters: marioCharacters });
  }

  render() {
    return (
      <div>
        Characters
        <div>
          {this.state.characters.map((character) => (
            <div>
              <img height="100" src={"/images/" + character.image} />
              {character.name}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Characters;
