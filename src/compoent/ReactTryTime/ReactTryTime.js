import React from "react"
import "./ReactTryTime.css"

function ReactTryTime(props){
    return(
<div>
    <p>Hello, everyone!</p>
    <p>Current data {new Date().toLocaleDateString()}.</p>
</div>
    )}
setInterval(ReactTryTime, 1000);

export default ReactTryTime;