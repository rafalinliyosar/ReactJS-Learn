import React from 'react';

export default class CountCompnent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }
    incrementclick = () => {

        this.setState( {
            count: this.state.count + 1
        });

    }

    render() {
        return (<div>The count is:{this.state.count}
            <button onClick={this.incrementclick}>Click to increment</button></div>)
    }
}