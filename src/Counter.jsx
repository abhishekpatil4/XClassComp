import React from 'react'
// import './App.css'

export default class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }
  render(){
    return (
      <>
      <h1>Counter App</h1>
      <span>Count: {this.state.count}</span>
      <div style={{margin:" 20px 0px"}}>
        <button onClick={() => this.setState({count: this.state.count+1})}>Increment</button>
        <button onClick={() => this.setState({count: this.state.count-1})}>Decrement</button>
      </div>
      </>
    )
  }
}