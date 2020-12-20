import React, {Component} from 'react';
import "./dragBox.css"

export default class dragBox extends Component{

    constructor(props){
        super(props);
        this.state = {
            width   : "0px",
            height  : "0px",
            display : "hide"
        }
    }
    setSize=(width, height)=>{
        this.state.width = width;
        this.state.height = height;
    }
    onDragStart = (e) =>{
        console.log("dragStart Start")
        console.log(e);
        console.log("dragStart End")
    }
    render(){
        var state   = this.state;
        var width   = state.width;
        var height  = state.height;
        var display = state.display;
        var classNm = "sm-dragbox " + display
        var dragBox = (
            <div className={classNm}></div>
        )
        return (
            <div className="box" draggable="true" onDragStart={this.onDragStart}>
                {dragBox}
            </div>
        )
    }

}
dragBox.defaultProps = {
    
}