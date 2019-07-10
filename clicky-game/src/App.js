import React from 'react';
import logo from './logo.svg';
import './App.css';

//import components
//import Card from "./components/..."
import smurfs from "./smurfs.json"


class App extends Component {
  state = {
    smurfs
  };

  removeSmurf = id => {
    const smurfs = this.state.smurfs.filter(smurf => smurf.id !== id);
    this.setState({smurfs});
  };

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