import React, {Component} from 'react';
import Button from "./BasicButton"

export default class TestButton extends Button{

    constructor(props){
        super(props);
    }

    render(){
        const props = this.props;
        
        return (
            <div>
                <div className="sm-btn" onClick={this.onClick}>{props.name}</div>
            </div>
        )
    }
}
