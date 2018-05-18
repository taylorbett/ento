import React from 'react';
import { connect } from 'react-redux';

import HelloWorld from '../../../core/components/HelloWorld';

export class ExampleContainer extends React.Component {
    render() {
        console.log(React.version);
        console.log('rerendering with', this.props);
        return (
            <React.Fragment>
                <div className='example-container'>
                    <p>Count: {this.props.count.data}</p>
                    <button onClick={() => {this.props.increment()}}>Increment</button>
                    <button onClick={() => {this.props.decrement()}}>Decrement</button>
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
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' }),
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(ExampleContainer);