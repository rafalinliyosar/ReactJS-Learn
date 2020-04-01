import React from 'react';

export default class CountComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            count: parseInt(props.initialCount),
            name: "Rafalin Liyosar",
            box:true,
            box1:true,
            value: 'coconut',
            fruits: [
                {value:'grapefruit',label:'grapefruit'}, 
                {value:'lime',label:'lime'},
                {value:'coconut',label:'coconut'},
                {value:'mango',label:'mango'}   
        
        ]
        };
    }
    incrementClick = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    addtodropdown = () => {
        this.state.fruits.push({value:'jackfruit', label:'jackfruit'});
        this.setState({
            fruits: this.state.fruits
        });
        
    }
    

    onChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    onChangebox = (event) => {
        console.log(event);
        this.setState({
            box: event.target.checked
        })
    }
   
    
handleChange = (event) =>{
    this.setState({value:event.target.value});
}
      

    render() {


        if (this.state.count === 12) {
            return (

                <div><input type="text" value="" />
                <input type="checkbox" checked={this.state.box1} />
                Hello world, This is count component: The count is a dozen
                <button onClick={this.incrementClick}>Increment</button>
                </div>);


        }
        return (<div>
            <input type="text" id="name" value={this.state.name} onChange={this.onChangeName} />
            <div> Hello {this.state.name}</div>
            <input type="checkbox"  checked={this.state.box} onChange={this.onChangebox}/>
            <div> Checkbox state is {this.state.box?"true":"false"} </div>

            <select value={this.state.value} onChange={this.handleChange}>
            {/* <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option> */}
            {
    this.state.fruits.map(f=>(<option value={f.value}>{f.label}</option>))
            }
          </select>
          <button onClick={this.addtodropdown}>Add</button>
            
          <div>You have selected {this.state.value} </div>
           
           
           
            
            <div> count component: {this.state.count} </div>

            <button onClick={this.incrementClick}>Increment</button>
            
        </div>);
    }
}