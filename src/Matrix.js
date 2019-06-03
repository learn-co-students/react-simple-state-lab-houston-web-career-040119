import React, { Component } from 'react';
import { create } from 'domain';
import Cell from './Cell'

export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(val => <Cell value={val}/>) // replace me and render a cell component instead!
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: createGrid()
}

function createGrid() {
  let resultArr = []
  for (let i = 0; i < 10; i++) { 
    let row = []
    for (let x = 0; x < 10; x++) { 
      row.push('#F00')
    }
    resultArr.push(row)
  }
  return resultArr
}
