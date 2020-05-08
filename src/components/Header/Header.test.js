import React from 'react';
import { Header } from './Header.jsx';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';


describe('test cases for the Header component', () => {
    let dummyProps = {
        redos: { 
            x: 0, 
            o: 0
        }
    };

    test('test if the component renders', () => {
        let div = document.createElement("div");
        ReactDOM.render(<Header { ...dummyProps }></Header>, div);
        ReactDOM.unmountComponentAtNode(div);       
    });

    test('test if the rodos content for X is rendered', () => {
        const { getByTestId } = render(<Header { ...dummyProps }></Header>);
        expect(getByTestId("x")).toHaveTextContent("X");
        
    });

    test('test if the X rodos content incriments', () => {
        dummyProps.redos.x = 1;
        const { getByTestId } = render(<Header { ...dummyProps }></Header>);
        expect(getByTestId("x")).toHaveTextContent("1");        
    });

    test('test if the rodos content for O is rendered', () => {
        const { getByTestId } = render(<Header { ...dummyProps }></Header>);
        expect(getByTestId("o")).toHaveTextContent("O");        
    });

    test('test if the O rodos content incriments', () => {
        dummyProps.redos.o = 1;
        const { getByTestId } = render(<Header { ...dummyProps }></Header>);
        expect(getByTestId("o")).toHaveTextContent("1");        
    });
});