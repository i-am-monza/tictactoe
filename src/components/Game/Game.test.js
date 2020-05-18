import React from 'react';
import ReactDOM from 'react-dom';
import test_renderer from 'react-test-renderer';
import { Game } from './Game.jsx';

describe('test cases for the Game component', () => {
  test('test if this component is rendered', () => {
    ReactDOM.render(<Game></Game>, document.createElement('div'));
  });

  test('test snapshot version', () => {
    expect(test_renderer.create(<Game></Game>)).toMatchSnapshot();
  });
});
