import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Tile from '../../atoms/Tile';

const Shift = styled.div`
    width: {$props => $props.long ? '100%' : '144px'};
    height: 34px;
    padding: 8px 10px;
    cursor: pointer;
`;

const ShiftText = styled.p`
    font-size: 0.8em;
    line-height: 17px;
    margin: 0;
`;

const ShiftTime = ShiftText.extend`
    font-weight: bold;
`;

const Alert = styled.div`
    position: absolute;
    right: 0;
    text-transform: uppercase;
    max-width: 128px;
`;

const CriticalAlert = Alert.extend`
    background: #c30015;
    color: #fff;
`;

const LowAlert = Alert.extend`
    background: #f6e416;
`;

// MUTED TEXT COLOUR #727375

export class ShiftComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            revealed: this.props.revealed,
        };
    }

    handleClick() {
        this.setState({
            revealed: !this.state.revealed,
        });
    }
    
    render() {
        return (
            <Tile onClick={() => this.handleClick()} block={this.props.long}>
                <Shift>
                    <ShiftTime>{this.props.startTime} - {this.props.endTime}</ShiftTime>
                    <ShiftText>{this.props.role}</ShiftText>
                    {this.props.alerts.critical.length ? <CriticalAlert>{this.props.alerts.critical.length} critical alerts</CriticalAlert> : null}
                    {this.props.alerts.low.length ? <LowAlert>{this.props.alerts.low.length} low alerts</LowAlert> : null}
                </Shift>
            </Tile>
        );
    }
}

ShiftComponent.defaultProps = {
    revealed: false,
    long: false,
}

ShiftComponent.propTypes = {
    revealed: PropTypes.bool,
    long: PropTypes.bool,
    alerts: PropTypes.shape({
        critical: PropTypes.arrayOf(PropTypes.string),
        low: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
}

export default ShiftComponent;