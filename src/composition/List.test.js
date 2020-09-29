import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

// This is the test case.
it('Renders without crashing', () => {
  // Create an element to test the component in.
  const div = document.createElement('div');
  // Render the component to that element.
  ReactDOM.render(<List key={list.id} header={list.header} cards={list.cardIds.map((id) => store.allCards[id])} />, div);
  // Clean up the created element.
  ReactDOM.unmountComponentAtNode(div);
});
