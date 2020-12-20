
import React, {Component} from 'react'
import Cmm from '../common'
import { Link, BrowserRouter } from 'react-router-dom';
import './test.css'
import { json } from 'body-parser';

export default class Button extends Component {
    constructor(props){
        super(props);

        this.state = {
            name : "Item",
            count : 0
        }
        this.ref = React.createRef();
        this.onClick = this.onClick.bind(this);
    }

    onClick(e){
        if(this.props.onClick) this.props.onClick(e);
        this.setState({...this.state, count : ++this.state.count, action : "click"});
    }

    render(){
        return(
            <>
                <div ref={this.ref} onClick={this.onClick}>{this.props.name}</div>
            </>
        )
    }
}

export class ToggleVisible extends Component {
    constructor(props){
        super(props)
        this.ref = React.createRef();

        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }

    show(){
        this.ref.current.style.display = "initial";
    }
    hide(){
        this.ref.current.style.display = "none";
    }
    
    toggleVisible(){
        var display = this.ref.current.style.display;

        
        if( display == "none" ) {
            this.ref.current.style.display = "initial";
        } else {
            this.ref.current.style.display = "none";
        }
    }
}

export class Item extends Component{
    constructor(props){
        super(props);
        this.state = {}
        this.onClick = this.onClick.bind(this);
    }
    onClick(e){
        if(this.props.onClick) this.props.onClick(e, this);
    }
    render(){
        return(
            <>
                <div onClick={this.onClick}>{this.state.name || this.props.name}</div>
            </>
        )
    }
}

export class GroupItem extends ToggleVisible {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        if( this.props.visible == "0" ) {
            this.toggleVisible();
        }
    }

    render(){
        return(
            <div ref={this.ref}>
                {this.props.children}
            </div>
        )
    }
}

export class DropDown extends Component {
    constructor(props){
        super(props);
        this.wrapper = React.createRef();
        this.btn = React.createRef();
        this.menuToggle = this.menuToggle.bind(this);
    }

    menuToggle(e){
        
        this.wrapper.current.toggleVisible();
        var self = this;
        //document.addEventListener("click", closeWrapper);
        function closeWrapper(e){
            if( self.btn.current.ref.current != e.target && self.wrapper.current.ref.current !== e.target.parentElement ) {
                self.wrapper.current.hide();
            }
        }
    }

    render(){
        var child = React.Children.map(this.props.children, element =>{
            var option = {}
            if( element.type == GroupItem ) {
                option = {...option, ref : this.wrapper, visible : "0"}
            }
            return React.cloneElement(element,{
                ...option
            })
        })

        return(
            <>
                <Button ref={this.btn} name={this.props.name} onClick={this.menuToggle} />
                {child}
            </>
        );
    }
}