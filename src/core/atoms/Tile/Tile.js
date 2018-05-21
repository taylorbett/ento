import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tile = styled.div`
    display: ${props => props.block ? 'block' : 'inline-block'};
    border: 1px solid #e4e9ed;
    border-radius: 4px;
    background: #f8fafd;
    text-align: left;
    color: #1f1f24;
    margin: 0 10px 10px 0;
    position: relative;
    overflow: hidden;
`;

export class TileComponent extends React.PureComponent {
    render() {
        console.log('rendering tile with', this.props);
        return (
            <Tile>
                {this.props.children}
            </Tile>
        );
    }
}

Tile.defaultProps = {
    children: null,
    block: false,
}

Tile.propTypes = {
    children: PropTypes.node,
    block: PropTypes.bool,
};

export default TileComponent;