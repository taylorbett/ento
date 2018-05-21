import React from 'react';
import Tile from './Tile';
import renderer from 'react-test-renderer';

describe('Tile', () => {
    it('renders correctly', () => {
        const clickable = false;
        const shrinkWrap = false;
        const tree = renderer
            .create(
                <Tile 
                    clickable={clickable}
                    shrinkWrap={shrinkWrap}
                />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});