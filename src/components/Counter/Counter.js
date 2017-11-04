import React from 'react';
import './Counter.css';


class Counter extends React.Component {
    state = {
        counter: 0
    };

    incrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    decrementCounter = () => {
        if (this.state.counter > 0) {
            this.setState({
                counter: this.state.counter -1
            });
        }
    }

    render() {
        return (
            <div className="Counter">
                <h1 className="Counter__number">{ this.state.counter }</h1>
                <button className="Counter__button" onClick={this.incrementCounter}>
                    Increment
                </button>
                <button className="Counter__button" onClick={this.decrementCounter}>
                    Decrement
                </button>
            </div>
        );
    }
 }

 export default Counter;
