import React from 'react';
import { Button } from '../button/button.jsx';

export const Board = props => {

    return (
        <table className="table table-borderless mt-3">
            <tbody data-testid="3x3 grid">
                <tr>
                    <td>
                        <Button handleClick={ props.handleClick } getHistory={ props.getHistory } index={0} />
                    </td>
                    <td>
                        <Button handleClick={ props.handleClick } getHistory={ props.getHistory } index={1} />
                    </td>
                    <td>
                        <Button handleClick={ props.handleClick } getHistory={ props.getHistory } index={2} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Button handleClick={ props.handleClick } getHistory={ props.getHistory } index={3} />
                    </td>
                    <td>
                        <Button handleClick={ props.handleClick } getHistory={ props.getHistory } index={4} />
                    </td>
                    <td>
                        <Button handleClick={ props.handleClick } getHistory={ props.getHistory } index={5} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Button handleClick={ props.handleClick } getHistory={ props.getHistory } index={6} />
                    </td>
                    <td>
                        <Button handleClick={ props.handleClick } getHistory={ props.getHistory } index={7} />
                    </td>
                    <td>
                        <Button handleClick={ props.handleClick } getHistory={ props.getHistory } index={8} />
                    </td>
                </tr>
            </tbody>
        </table>
    );
}