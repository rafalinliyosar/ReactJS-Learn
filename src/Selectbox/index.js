import React from 'react';

export default class Selectbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            fruits: [
                { value:'',label:''},
                { value: 'grapefruit', label: 'grapefruit' },
                { value: 'orange', label: 'orange' },
                { value: 'chickoo', label: 'chickoo' },
                { value: 'watermelon', label: 'watermelon' }
            ]
        };        
    }

    selectchange = (event) =>{
            
        this.setState({value:event.target.value});
    }



    render(){
        return(<div>
            <select value={this.state.value} onChange={this.selectchange}>
                {this.state.fruits.map(f=>(<option value={f.value}>{f.label}</option>))}
                </select>
        <div>You have selected {this.state.value}</div>
                </div>);
    }
}
            
    