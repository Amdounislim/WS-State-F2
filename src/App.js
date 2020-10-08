import React, { Component } from 'react'
import './App.css'
import Counter from './components/Counter'

export default class App extends Component {

  // constructor(props){
  //   super(props)
  //   this.state={
  //     name:"Elias"
  //   }
  // }
  state={
    // name:"Slim",
    // age:23,
    // person:{
    //   name:'ghassen',
    //   email:"gas@gmail.com"
    // },
    counter : 0,
    myinput:''
  }

  increment=()=>{
    this.setState({
      counter:this.state.counter + 1,
    })
  }

  decrement=()=>{
    if(this.state.counter>0){
      this.setState({counter:this.state.counter-1})}
    }

  // decrement=()=>{
  //   return this.state.counter>0?this.setState({counter:this.state.counter-1}):this.state
  // }

  HandlerChange=(x)=>{
    this.setState({
        myinput:x
    })
}

  render() {
    const {counter, name, age, person} = this.state
    return (
      <div className='App'>
        {/* <h3>{this.state.name}</h3>
        <h5>{this.state.age}</h5>
        <h5>{this.state.person.email}</h5> */}
        {/* <h2>{counter}</h2> */}
        {/* <Counter count={this.state.counter}/> */}
        <Counter HandlerChange={this.HandlerChange} />
        <span></span>
        {/* <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button> */}
      </div>
    )
  }
}

