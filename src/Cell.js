import React, { Component } from 'react';

export default class Cell extends Component {
  
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            color: this.props.value
        }
    }

    changeColor = () => {
        {this.setState({color: '#333'})}
    }

    render() {
        return (
            <div className='cell' 
                style={{backgroundColor: this.state.color}} 
                onClick={() => this.changeColor()}>
            </div>
        )
    }


//   genRow = (vals) => (
//     vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
//   )
  
//   genMatrix = () => (
//     this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
//   )
  
//   render() {
//     return (
//       <div id="matrix">
//         {this.genMatrix()}
//       </div>
//     )
//   }
  
}