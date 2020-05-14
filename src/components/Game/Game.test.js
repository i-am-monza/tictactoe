import React from 'react';
import renderer from 'react-test-renderer';
import { Game } from 'Game.jsx';

describe("test suite for Game.jsx component", () => {
    test("Game component snapshot is the same with in repository", () => {
        const tree = renderer.create(<Game></Game>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});