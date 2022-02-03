import React from "react"
import "./ReactTryTime.css"

// function ReactTryTime(props){
//     return(
// <div>
//     <p>Hello, everyone!</p>
//     <p>Current data {props.date.toLocaleDateString()}.</p>
//     <p>Current time {props.date.toLocaleTimeString()}.</p>
// </div>
//     )}
// // setInterval(ReactTryTime, 1000);
function tick(){
    // const time = (
    //     <div>
    //     <p>Hello everyone!</p>
    //     <p>Current time {this.state.date.toLocaleTimeString()}.</p>
    // </div>

    // )
    // this.setState({
    //     date: new Date()
    // })
}
setInterval( tick, 1000)

class ReactTryTime extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
         date: new Date()
      }
    }
    componentDidMount(){
        this.timerID = setInterval(()=> this.tick(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({
            date : new Date()
        })
    }
    render(){
        return(
             <div>
                 <p>Hello everyone!</p>
                 <p>Current time {this.state.date.toLocaleTimeString()}.</p>
             </div>
        )
    }
    
}

export default ReactTryTime;