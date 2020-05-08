import React from 'react';
export const Header = props => {
    
    return (
        <header title="tic tac toe header">    
            <h1 className="lead text-center md-1">Tic Tac Toe</h1>
            <span className="redos">
                redo's:
                &nbsp;&nbsp;&nbsp;&nbsp;
                <cite id="x" data-testid="x">
                    {props.redos.x === 0 ? 'X': props.redos.x}
                </cite>
                &nbsp;|&nbsp;
                <cite id="o" data-testid="o">
                    {props.redos.o === 0 ? 'O' : props.redos.o}
                </cite>
            </span>
        </header>
    );
}