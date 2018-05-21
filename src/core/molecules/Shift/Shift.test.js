import React from 'react';
import Shift from './Shift';
import renderer from 'react-test-renderer';

describe('Shift', () => {
    it('renders correctly', () => {
        const someAlerts = {
            critical: [
                'Test alert',
                'Test alert',
                'Test alert',
            ],
            low: [
                'Test alert',
            ],      
        };
        const tree = renderer
            .create(
                <Shift 
                    startTime={"9:00am"}
                    endTime={"5:00pm"}
                    roleTitle={"Head chef"}
                    alerts={someAlerts}
                />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});