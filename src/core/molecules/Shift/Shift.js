import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Tile from '../../atoms/Tile';

const Shift = styled.div`
    width: ${props => props.long ? '100%' : '144px'};
    height: 34px;
    padding: 8px 10px;
    cursor: pointer;
    color: ${props => props.revealed ? '#727375' : 'inherit'};
`;

const ShiftText = styled.p`
    font-size: 0.8em;
    line-height: 17px;
    margin: 0;
`;

const ShiftTime = ShiftText.extend`
    font-weight: bold;
`;

const AlertsContainer = styled.div`
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.65em;
    max-width: 128px;
    margin: -1px -1px 0 0;
`;

const Alert = styled.div`
    border-radius: 0 4px 4px 0;
    height: 26px;
    padding: 0 8px;
    line-height: 26px;
`;

const CriticalAlert = Alert.extend`
    background: #c30015;
    color: #fff;
`;

const LowAlert = Alert.extend`
    background: #f6e416;
    color: #1f1f24;
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
        console.log('handleClick!');
        this.setState({
            revealed: !this.state.revealed,
        });
    }
    
    render() {
        console.log('rendering shift with', this.props)
        return (
            <Tile block={this.props.long}>
                <Shift revealed={this.state.revealed} onClick={() => this.handleClick()}>
                    <ShiftTime>{this.props.startTime} - {this.props.endTime}</ShiftTime>
                    <ShiftText>{this.props.role}</ShiftText>
                    <AlertsContainer>
                        {this.props.alerts.critical.length ? <CriticalAlert>{this.props.alerts.critical.length} critical alerts</CriticalAlert> : null}
                        {this.props.alerts.low.length ? <LowAlert>{this.props.alerts.low.length} low alerts</LowAlert> : null}
                    </AlertsContainer>
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