import React from 'react';
import styled from 'styled-components';

export class ShiftDemo extends React.Component {
    render() {
        const Button = styled.button`
            height: 40px;
            padding: 0px 6px;
            border: none;
            background: green;
            margin-right: 6px;
            color: white;
        `;

        const ButtonNegative = Button.extend`
            background: red;
        `;

        return (
            <React.Fragment>
                Hello
            </React.Fragment>
        )
    }
}

export default ShiftDemo;