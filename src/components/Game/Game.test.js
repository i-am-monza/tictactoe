import React from './node_modules/react';
import ReactDOM from './node_modules/react-dom';
import test_renderer  from './node_modules/react-test-renderer';
import { Game } from './game.jsx';

describe('test cases for the Game component', () => {
  test('test if this component is rendered', () => {
    ReactDOM.render(<Game></Game>, document.createElement("div"));
  });

  test('test snapshot version', () => {
    expect(test_renderer.create(<Game></Game>)).toMatchSnapshot();
  });
});