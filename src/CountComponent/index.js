import React from 'react';

export default class CountComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            count: parseInt(props.initialCount),
            name: "Rafalin Liyosar"
        };
    }
    incrementClick = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    onChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
       

        if(this.state.count === 12){
            return (
            
            <div><input type="text" value="" />Hello world, This is count component: The count is a dozen
                <button onClick={this.incrementClick}>Increment</button>
            </div>);


        }
        return (<div><input type="text" id="name" value={this.state.name} onChange={this.onChangeName} />Hello {this.state.name}, This is count component: {this.state.count}
            <button onClick={this.incrementClick}>Increment</button>
        </div>);
    }
}