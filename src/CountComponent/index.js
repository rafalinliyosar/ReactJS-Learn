import React from 'react';

export default class CountComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            count: parseInt(props.initialCount)
        };
    }
    incrementClick = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    render() {
        if(this.state.count === 12){
            return (<div>Hello world, This is count component: The count is a dozen
                <button onClick={this.incrementClick}>Increment</button>
            </div>);

        }
        return (<div>Hello world, This is count component: {this.state.count}
            <button onClick={this.incrementClick}>Increment</button>
        </div>);
    }
}