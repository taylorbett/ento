import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import * as CountActions from '../../../actions/countActions';

import HelloWorld from '../../../core/components/HelloWorld';

export class ExampleContainer extends React.Component {
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
                <div className='example-container'>
                    <p>Count: {this.props.count.data}</p>
                    <Button onClick={() => {this.props.dispatch(CountActions.increment())}}>Increment</Button>
                    <ButtonNegative onClick={() => {this.props.dispatch(CountActions.decrement())}}>Decrement</ButtonNegative>
                </div>
                <HelloWorld />
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(CountActions, dispatch),
        dispatch,
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(ExampleContainer);