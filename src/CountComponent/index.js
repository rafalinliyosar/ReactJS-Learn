import React from 'react';

export default class CountComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }
    incrementClick = () => {
        this.setState({
            count: this.state.count + 1
        });

    }

        }
        return (<div>Hello world, This is count component: {this.state.count}
            <button onClick={this.incrementClick}>Increment</button>
        </div>);
    }
}