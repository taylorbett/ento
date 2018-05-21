import React from 'react';
import styled from 'styled-components';
import Shift from '../../core/molecules/Shift';

const ShiftDemoContainer = styled.div`
    margin: 0 20px;
`;

const DemoHeading = styled.p`
    color: #727375;
    margin-bottom: 20px;
    font-size: 0.7em;
`;

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
            <ShiftDemoContainer>
                <div className="row">
                    <div className="col col-lg-3">
                        <DemoHeading>Normal</DemoHeading>
                        <Shift
                            startTime={"9:00am"}
                            endTime={"5:00pm"}
                            roleTitle={"Head chef"}
                            alerts={noAlerts}
                        />
                        <DemoHeading>Single Low Alert</DemoHeading>
                        <Shift
                            startTime={"9:00am"}
                            endTime={"5:00pm"}
                            roleTitle={"Head chef"}
                            alerts={singleLow}
                        />
                    </div>
                    <div className="col col-lg-3">
                        <DemoHeading>Single Critical Alert</DemoHeading>
                        <Shift
                            startTime={"9:00am"}
                            endTime={"5:00pm"}
                            roleTitle={"Head chef"}
                            alerts={singleCritical}
                        />
                        <DemoHeading>Multiple Alerts</DemoHeading>
                        <Shift
                            startTime={"9:00am"}
                            endTime={"5:00pm"}
                            roleTitle={"Head chef"}
                            alerts={someAlerts}
                        />
                    </div>
                    <div className="col col-lg-6">
                        <DemoHeading>Normal Long</DemoHeading>
                        <Shift
                            startTime={"9:00am"}
                            endTime={"5:00pm"}
                            roleTitle={"Head chef"}
                            alerts={noAlerts}
                            long
                        />
                        <DemoHeading>Multiple Alerts Long</DemoHeading>
                        <Shift
                            startTime={"9:00am"}
                            endTime={"5:00pm"}
                            roleTitle={"Head chef"}
                            alerts={someAlerts}
                            long
                        />
                    </div>
                </div>
            </ShiftDemoContainer>
        )
    }
}

export default ShiftDemo;