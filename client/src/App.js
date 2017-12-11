import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
import SongForm from './components/SongForm';
import SongList from './components/SongList';

class App extends Component {
  render() {
    return (
      <Container>
        <Header as='h1'>Top 100 Billboard React</Header>
        <SongForm />
        <SongList />
      </Container>
    );
  }
}


export default App;
