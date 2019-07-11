import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

//import components
import SmurfCard from "./components/SmurfCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper"
import smurfs from "./smurfs.json";


class App extends Component {
  state = {
    smurfs
    random: 0
  };

  removeSmurf = id => {
    const smurfs = this.state.smurfs.filter(smurf => smurf.id !== id);
    this.setState({smurfs});
  };

  randomizeCards = () => {

      const min = 1;
      const max = 12;
      const rand = min + Math.random() * (max - min);
      this.setState({ random: this.state.random + rand });

  }

  render() {
    return (
      <Wrapper>
        <Title>Smurfs List</Title>
        {this.state.smurfs.map(smurf=> (
          <SmurfCard
            removeSmurf={this.removeSmurf}
            id={smurf.id}
            key={smurf.id}
            name={smurf.name}
            image={smurf.image}
            occupation={smurf.occupation}
            location={smurf.location}
            />
        ))}
      </Wrapper>
    );
  }
}

export default App;