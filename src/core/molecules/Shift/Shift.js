import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Tile from '../../atoms/Tile';

const Shift = styled.div`
    width: ${props => props.long ? '' : '164px'};
    min-width: 125px;
    height: 50px;
    padding: 8px 10px;
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
    display: flex;
    flex-direction: column;
    height: 100%;
    position: absolute;
    top: 0;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.65em;
    width: 128px;
    margin-left: -8px;
    transition: left 150ms ease-out, margin-left 100ms ease-out;
    // transform: ${props => props.revealed ? 'translateX(0px)' : 'translateX(119px)'};
    left: ${props => props.revealed ? '44px' : '100%'};
    
    &:hover {
        margin-left: ${props => props.revealed ? '-8px' : '-16px'};
    }
`;

const Alert = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0 4px 4px 0;
    padding: 0 8px;
    flex-grow: 1;
    -moz-box-shadow: inset 7px 0 9px -7px rgba(0,0,0,0.2);
    -webkit-box-shadow: inset 7px 0 9px -7px rgba(0,0,0,0.2);
    box-shadow: inset 7px 0 9px -7px rgba(0,0,0,0.2);
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
            revealed: false,
        };
    }

    handleClick() {
        this.setState({
            revealed: !this.state.revealed,
        });
    }
    
    render() {
        // console.log('rendering shift with', this.props, this.state);
        const critLen = this.props.alerts.critical.length;
        const lowLen = this.props.alerts.low.length;
        return (
            <Tile shrinkWrap={!this.props.long} clickable>
                <Shift {...this.props} {...this.state}>
                    <ShiftTime>{this.props.startTime} - {this.props.endTime}</ShiftTime>
                    <ShiftText>{this.props.roleTitle}</ShiftText>
                    <AlertsContainer revealed={this.state.revealed} onClick={() => this.handleClick()}>
                        {critLen ?
                            <CriticalAlert>
                                {this.state.revealed ? `${critLen} critical alert${critLen > 1 ? 's' : ''}` : null}
                            </CriticalAlert> : null
                        }
                        {lowLen ?
                            <LowAlert>
                                {this.state.revealed ? `${lowLen} low alert${lowLen > 1 ? 's' : ''}` : null}
                            </LowAlert> : null
                        }
                    </AlertsContainer>
                </Shift>
            </Tile>
        );
    }
}

ShiftComponent.defaultProps = {
    roleTitle: '',
    long: false,
}

ShiftComponent.propTypes = {
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    roleTitle: PropTypes.string,
    long: PropTypes.bool,
    alerts: PropTypes.shape({
        critical: PropTypes.arrayOf(PropTypes.string),
        low: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
}

export default ShiftComponent;