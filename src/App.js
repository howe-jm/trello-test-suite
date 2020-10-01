import React, { Component } from 'react';
import List from './composition/List';
import STORE from './STORE';
import './App.css';

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce((newObj, [key, value]) => (key === keyToOmit ? newObj : { ...newObj, [key]: value }), {});
}
class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    },
  };

  state = {
    store: STORE,
  };

  deleteCard = (cardId) => {
    const { lists, allCards } = this.state.store;

    const newLists = lists.map((list) => ({
      ...list,
      cardIds: list.cardIds.filter((id) => id !== cardId),
    }));

    const newCards = omit(allCards, cardId);

    this.setState({
      store: {
        lists: newLists,
        allCards: newCards,
      },
    });
  };

  addCard = () => {
    console.log('Button clicked 2');
  };

  render() {
    const { store } = this.state;
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map((list) => (
            <List key={list.id} id={list.id} clickButton={this.deleteCard} header={list.header} cards={list.cardIds.map((id) => store.allCards[id])} />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
