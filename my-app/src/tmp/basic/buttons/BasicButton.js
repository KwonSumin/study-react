import React, {Component} from 'react';
import "./button.css";

export default class Button extends Component{

    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
        
    }

    render(){
        const props = this.props;
        this.onClick = this.onclick.bind(this);
        console.log("Button Render")
        return (
            <div>
                <div className="sm-btn" onClick={this.onClick}>{props.name}</div>
            </div>
        )
    }

    onClick = (e)=>{
        if( this.props.event.onClick == null ) {
            console.log("Default Click Event")
        } else {
            this.props.event.onClick(e);
        }
    }

}
Button.defaultProps = {
    name : "버튼",
    event : {
        //onClick : (e)=>{console.log("Click Event")}
    }
}