import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

function mapStateToProps(state) {
    return {
        count: state.count
    };
}
const mapDispatchToProps = {
    increment,
    decrement
};

class Counter extends React.Component {
    //state = { count: 0 }

    increment = () => {
        this.props.increment();
    }

    decrement = () => {
        this.props.decrement();
    }

    render() {
        return (
                <div>
                    <h2>Counter</h2>
                    <div>
                        <button onClick={this.decrement}>-</button>
                        <span>{this.props.count}</span>
                        <button onClick={this.increment}>+</button>
                    </div>
                </div>
                )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);