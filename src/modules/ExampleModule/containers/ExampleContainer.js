import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CountActions from '../../../actions/countActions';

import HelloWorld from '../../../core/components/HelloWorld';

export class ExampleContainer extends React.Component {
    render() {
        console.log(React.version);
        console.log('rerendering with', this.props);
        return (
            <React.Fragment>
                <div className='example-container'>
                    <p>Count: {this.props.count.data}</p>
                    <button onClick={() => {this.props.dispatch(CountActions.increment())}}>Increment</button>
                    <button onClick={() => {this.props.dispatch(CountActions.decrement())}}>Decrement</button>
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