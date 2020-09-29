import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

// This is the test case.
it('Renders without crashing', () => {
  // Create an element to test the component in.
  const div = document.createElement('div');
  // Render the component to that element.
  ReactDOM.render(<List cards={[]} />, div);
  // Clean up the created element.
  ReactDOM.unmountComponentAtNode(div);
});

it('Renders the UI as expected with no cards', () => {
  const tree = renderer.create(<List cards={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders the UI as expected with one card', () => {
  const tree = renderer
    .create(
      <List
        cards={[
          {
            id: 'a',
            title: 'First card',
            content: 'lorem ipsum',
          },
        ]}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders the UI as expected with multiple cards', () => {
  const tree = renderer
    .create(
      <List
        cards={[
          { id: 'a', title: 'First card', content: 'lorem ipsum' },
          { id: 'b', title: 'Second card', content: 'lorem ipsum' },
          { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
        ]}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
