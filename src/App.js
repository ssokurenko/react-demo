import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter/Counter.js';
import Form from './components/Form/Form.js';
import GithubCardsList from './components/GithubCardsList/GithubCardsList.js';

class App extends Component {

  state = {
    cards: []
  };

  addNewCard = (card) => {
     console.log(card);

     this.setState(
       prevState => ({
         cards: prevState.cards.concat(
          {
            key: card.id,
            name: card.name,
            userName: card.login,
            avatarUrl: card.avatar_url,
            company: card.company
          }
         )
       })
     );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Demo</h1>
        </header>
        <Counter />
        <Form onSubmit={ this.addNewCard } />
        <GithubCardsList cards={ this.state.cards }/>
      </div>
    );
  };
}

export default App;
