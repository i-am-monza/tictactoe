import React from 'react';

// functional component Button accepting properties
export const Button = props => {
    return (
        <button 
            id={`${props.index}`}
            type="button" 
            title={ `Button ${props.index + 1}` }
            onClick={event => props.handleClick(event)}>
                { props.getHistory(props.index) }
        </button>);
}