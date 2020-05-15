import React from 'react';
import { Dashboard } from './Dashboard.jsx';
import ReactDOM from 'react-dom';
import { render, fireEvent, getByTitle } from '@testing-library/react';

describe('test cases for the Dashboard component', () => {
    const dummyProps = {
        isXTurn: true,
        moves: [5],
        handleClick: jest.fn(e => {
            return "handleClick";
        }),
        getHistory: jest.fn(index => {
            return "getHistory";
        })
    };

    /*
        the below api's are meant to silence the console from this error that keeps popping up althought tests are passing.
        haven't been able to figure it out, but it has to do with testing a fired event from a form of which this component is one.
        the is something like this:
            Error: Not implemented: HTMLFormElement.prototype.submit
            /// source -> https://gitmemory.com/issue/jsdom/jsdom/1937/526162324
    */
    let emit;

    beforeAll(() => {
        ({ emit } = window._virtualConsole);
    });

    beforeEach(() => {
        window._virtualConsole.emit = jest.fn();
    });

    afterAll(() => {
        window._virtualConsole.emit = emit;
    });
    // end of code block for silencing the console

    test('test if this component is rendered correctly first', () => {
        let div = document.createElement("div");
        ReactDOM.render(<Dashboard { ...dummyProps }></Dashboard>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('test if Rewind button exists and clicks', () => {
        const { getByTitle } = render(<Dashboard { ...dummyProps } ></Dashboard>);
        expect(getByTitle("Rewind button")).toBeTruthy();
        expect(fireEvent.click(getByTitle("Rewind button"))).toBeTruthy();
    });

    test('test if label displays playeer X when isXTurn=true', () => {
        const { getByText } = render(<Dashboard { ...dummyProps }></Dashboard>)
        expect(getByText("X")).toBeTruthy();
    });

    test('test is li elements are rendered when moves array is not 0', () => {
        const { getByTestId, getByTitle } = render(<Dashboard { ...dummyProps }></Dashboard>);
        expect(getByTestId("log")).toContainElement(getByTitle("Play in history"));
    });

    test('test if player X turn is shown by dashboard', () => {
        const { getByTitle } = render(<Dashboard { ...dummyProps }></Dashboard>);
        expect(getByTitle("Player X's turn")).toHaveTextContent("X")
    });

    test('test if player O turn is shown by dashboard', () => {
        dummyProps.isXTurn = !dummyProps.isXTurn;
        const { getByTitle } = render(<Dashboard { ...dummyProps }></Dashboard>);
        expect(getByTitle("Player O's turn")).toHaveTextContent("O")
    });
});