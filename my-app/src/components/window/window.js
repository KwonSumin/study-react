import React, {Component} from 'react';
import './window.css'

class Window extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClose : false
        };
        this.closeWindow = this.closeWindow.bind(this);
    }

    closeWindow = function(e){
        this.setState(
            ()=>{return {isClose : true}}
        );
        this.props.beforeClose();
        console.log("Close");
        this.props.afterClose();

    }

    render(){

        var window = (
            <>
                <div className="sm-window">
                    <div className="sm-window-head" onClick={this.closeWindow}>X</div>
                    <div className="sm-window-body"></div>
                </div>
            </>
        );
        return this.state.isClose ? null : window;
    }
}
Window.defaultProps = {
    beforeClose : function(){
        console.log("close Before")
    },
    afterClose : function(){
        console.log("close After")
    }
}
export default Window;