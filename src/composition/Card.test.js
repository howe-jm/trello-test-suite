import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

// This is the test case.
it('Renders without crashing', () => {
  // Create an element to test the component in.
  const div = document.createElement('div');
  // Render the component to that element.
  ReactDOM.render(<Card />, div);
  // Clean up the created element.
  ReactDOM.unmountComponentAtNode(div);
});

it('Renders the UI as expected', () => {
  const tree = renderer.create(<Card />).toJSON();
  expect(tree).toMatchSnapshot();
});
