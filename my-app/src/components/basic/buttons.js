
import React, {Component} from 'react'
//import { Link, BrowserRouter } from 'react-router-dom';
import './test.css'

const GROUP_DIV_ID = "GRP_DIV";

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.setOption = this.setOption.bind(this);
    }
    setOption(){
        this.clsNm = "sm-btn";
        
    }
    render(){
        this.setOption();
        return(
            <>
                <div className={this.clsNm}>{this.props.name}</div>
            </>
        );
    }
}
Button.defaultProps = {
    name : "Button",
    size : "small",
    type : "info"
}
export class Dropdown extends Component {
    constructor(props){
        super(props)
        this.onClick = this.onClick.bind(this);
        console.log(this.props.children)
    }
    onClick(e){
        var group = this._group;
        group.togleVisible();
    }
    render(){
        var group = React.Children.map(this.props.children, child=>{
            return React.cloneElement(child, {
                ref: ref => this._group = ref
            });
        })
        return(
            <>
                <div onClick={this.onClick}>{this.props.name}</div>
                {group}
            </>
        )
    }
}
Dropdown.defaultProps = {
    name : "Dropdown"
}
export class Group extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible : false
        }
        this.ref = React.createRef();
    }

    togleVisible(){
        this.setState({...this.state, visible : !this.state.visible})
    }

    componentDidMount(){
        this.init = {};
        this.init.display = this.ref.current.style.display;
        this.ref.current.style.display = "none"
    }

    componentDidUpdate(){
        if( !this.state.visible ) {
            this.ref.current.style.display = "none"
            console.log(this.ref.current.style.display);
        } else {
            console.log("visible")
            this.ref.current.style.display = this.init.display
        }
    }

    render(){
        console.log("render")
        var Child = this.props.children
        return(
            <>
                <div ref={this.ref}>
                    {this.props.children}
                </div>
            </>
        )
    }
}

export class Item extends Component {
    constructor(props){
        super(props)
        this.onClick = this.onClick.bind(this);
    }
    onClick(e){
        if(this.props.onClick) this.props.onClick(e);
    }
    render(){
        return(
            <div className="btn-item" onClick={this.onClick}>{this.props.name}</div>
        )
    }
}
Item.defaultProps = {
    name : "Item"
}