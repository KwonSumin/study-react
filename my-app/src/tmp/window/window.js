import React, {Component} from 'react';
import './window.css'

class Window extends Component {
    static zIndex = 0;
    constructor(props) {
        super(props);
        this.state = {
            isClose : false
        };
        this.closeWindow = this.closeWindow.bind(this);
        this.window = React.createRef();
        this.head = React.createRef();
    }

    closeWindow = function(e){
        this.setState(
            ()=>{return {isClose : true}}
        );
        this.props.beforeClose();
        console.log("Close");
        this.props.afterClose();

    }

    componentDidMount(){
        var self = this;

        var head = this.head.current;
        dragElement(this.window.current);
        
        this.window.current.addEventListener('click', function(e){
            self.window.current.style.zIndex = Window.zIndex++;
        })

        function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            
            head.onmousedown = dragMouseDown;
            
            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = elementDrag;
            }
            
            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                
                console.log("pos")
                console.log(pos3);
                console.log(pos4);
                if( pos3 < 0 ) return;
                if( pos4 < 0 ) return;
                // set the element's new position:
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }
            
            function closeDragElement() {
                /* stop moving when mouse button is released:*/
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }
    }

    render(){

        var window = (
            <>
                <div ref={this.window} className="sm-window">
                    <div className="sm-window-head" ref={this.head}>
                        <span className="sm-window-head-left"></span>
                        <span className="sm-window-head-middle">{this.props.title}</span>
                        <span className="sm-window-head-right" >
                            <span className="sm-window-head-btn" onClick={this.closeWindow}>X</span>
                        </span></div>
                    <div className="sm-window-body"></div>
                </div>
            </>
        );
        return this.state.isClose ? null : window;
    }
}
Window.defaultProps = {
    title : "Window Title"
}
export default Window;