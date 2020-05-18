import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button.jsx';
import { render, fireEvent } from '@testing-library/react';

describe('test cases for Button component', () => {
  const dummyProps = {
    index: 0,
    handleClick: jest.fn((e) => {
      return 'handleClick';
    }),
    getHistory: jest.fn((index) => {
      return 'getHistory';
    }),
  };

  test('test if this component is rendered correctly first', () => {
    let div = document.createElement('div');
    ReactDOM.render(<Button {...dummyProps}></Button>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('test existance of button by its title', () => {
    const { getByTitle } = render(<Button {...dummyProps}></Button>);
    expect(getByTitle(`Button ${dummyProps.index + 1}`)).toBeInTheDocument();
  });

  test('test if elements have getHistory values', () => {
    const { getByText } = render(<Button {...dummyProps}></Button>);
    fireEvent.click(getByText('getHistory'));
    expect(getByText('getHistory')).toBeTruthy();
  });
});
