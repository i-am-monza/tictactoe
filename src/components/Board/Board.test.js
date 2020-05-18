import React from 'react';
import ReactDOM from 'react-dom'

import { render} from '@testing-library/react';
import { Board } from './Board.jsx';

describe('test cases for Board component', () => {
    const dummyProps = {
        handleClick: jest.fn(e => {
            return "handleClick";
        }),
        getHistory: jest.fn(index => {
            return "getHistory";z
        })
    };

    test('test if the board component is rendered', () => {
        const div = document.createElement("div");
        ReactDOM.render(<Board { ...dummyProps }></Board>, div);ReactDOM.unmountComponentAtNode(div);
    });

    test('test for 3x3 grid from table element', () => {
        const { getByTestId, getByTitle } = render(<Board { ...dummyProps }></Board>);
        expect(getByTestId("3x3 grid")).toBeInTheDocument();
        expect(getByTitle("Button 1")).toHaveAttribute("type", "button");
    });
});