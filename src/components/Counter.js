import React, { Component } from 'react'

export default class Counter extends Component {
    state={
        // myinput:''
    }

// HandlerChange=(event)=>{
//     this.setState({
//         myinput:event.target.value 
//     })
// }

    render() {
        return (
            <div>
                <input type='text' onChange={(e)=>this.props.HandlerChange(e.target.value)}></input>
                <br/>
                {/* <span>{this.state.myinput}</span> */}
            </div>
        )
    }
}

