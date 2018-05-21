import React from 'react';

import Shift from '../../core/molecules/Shift';

export class ShiftDemo extends React.Component {
    render() {
        const noAlerts = {
            critical: [],
            low: [],      
        };

        const singleCritical = {
            critical: [
                'Test alert'
            ],
            low: [],      
        };

        const singleLow = {
            critical: [],
            low: [
                'Test alert'
            ],      
        };

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
        return (
            <React.Fragment>
                <Shift
                    startTime={"9:00am"}
                    endTime={"5:00pm"}
                    roleTitle={"Head chef"}
                    alerts={noAlerts}
                />
                <Shift
                    startTime={"9:00am"}
                    endTime={"5:00pm"}
                    roleTitle={"Head chef"}
                    alerts={singleCritical}
                />
                <Shift
                    startTime={"9:00am"}
                    endTime={"5:00pm"}
                    roleTitle={"Head chef"}
                    alerts={singleLow}
                />
                <Shift
                    startTime={"9:00am"}
                    endTime={"5:00pm"}
                    roleTitle={"Head chef"}
                    alerts={someAlerts}
                />
                <Shift
                    startTime={"9:00am"}
                    endTime={"5:00pm"}
                    roleTitle={"Head chef"}
                    alerts={someAlerts}
                    long
                />
            </React.Fragment>
        )
    }
}

export default ShiftDemo;