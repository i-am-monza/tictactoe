import React from 'react';

export const Dashboard = props => {
    return (
        <form title="Progress dashboard">
            <span className="sub-head">
                <button
                    title="Rewind button"
                    onClick={event => props.handleClick(event)}
                >
                    <i id="rewind" className="fa fa-undo"></i>
                </button>
                <label id="player" title={`Player ${props.isXTurn ? 'X' : 'O'}'s turn`}>
                    { props.isXTurn ? 'X' : 'O' }
                </label>
            </span>
            <ol id="log" data-testid="log">
                { props.moves.map(index => {
                    let player = props.getHistory(index);
                    let log = `Player ${player} at tile ${Number.parseInt(index) + 1}`;

                    return (
                        <li key={index} title="Play in history">
                            { log }
                        </li>
                    );
                })}
            </ol>
        </form>
    );
}