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
