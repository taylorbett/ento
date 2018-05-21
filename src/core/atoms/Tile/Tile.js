import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tile = styled.div`
    display: ${props => props.shrinkWrap === true ? 'inline-block' : 'block'};
    border: 1px solid #e4e9ed;
    border-radius: 4px;
    background: #f8fafd;
    text-align: left;
    color: #1f1f24;
    position: relative;
    overflow: hidden;
    cursor: ${props => props.clickable ? 'pointer' : 'default'};
`;

export class TileComponent extends React.PureComponent {
    render() {
        console.log('rendering tile with', this.props);
        return (
            <Tile {...this.props}>
                {this.props.children}
            </Tile>
        );
    }
}

Tile.defaultProps = {
    children: null,
    shrinkWrap: false,
    clickable: false,
}

Tile.propTypes = {
    children: PropTypes.node,
    shrinkWrap: PropTypes.bool,
    clickable: PropTypes.bool,
};

export default TileComponent;