    import React, {Component} from 'react';
    import { Route, Link } from 'react-router-dom';
import './menu.css'

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : true
        }
        this.ref = React.createRef();
    }

    show(){
        this.setState({...this.state, visible : true});
    }

    hide(){
        this.setState({...this.state, visible : false});
    }

    componentDidMount(){
        //set visible
        var display = this.ref.current.style.display ? this.ref.current.style.display : "inline-block";
        this.setState({...this.state, initDisplay : display});
    }

    componentDidUpdate(){
        var display = "inline-block";
        if( this.state.visible ){
            display = this.props.initDisplay;
        } else {
            display = "none";
        }
        this.ref.current.style.display = display
        
    }

    render(){
        return (
            <>
                <Link to={this.props.link} className="sm-menu" {...this.props} ref={this.ref} >
                    <div>{this.props.name}</div>
                </Link>
            </>
        )
    }
}
Menu.defaultProps = {
    visible : '1',
    link : "/tmp"
}
export class SlideMenu extends Component {
    constructor(props){
        super(props);
        
        this.sub_wrapper = React.createRef();
        this.onClick = this.onClick.bind(this);
    }

    onClick(e){
        this.sub_wrapper.current.style.display = "inline-block";
    }

    componentDidMount(){
        var self = this;
       //Outside Click Event ( hide Menu ) 
        document.addEventListener('click', function(e){
            var target = e.target;
            if( target != self.sub_wrapper.current ) {
                self.sub_wrapper.current.style.display = "none";
            }
        }, {capture : true})
    }

    render(){
        let sublist = this.props.sub.map((obj, idx)=>{
            return (
                <Menu {...obj} key={idx} ref={this['submenu_'+idx]} className="sm-submenu" visible="0" name={obj.name} />
            )
        })
        return (
            <div className="sm-slidemenu" onClick={this.onClick}>
                <Menu {...this.props.main} to="#"/>
                <div className="sm-sublist-wrapper" ref={this.sub_wrapper}>
                    {sublist}
                </div>
            </div>
        )
    }
}

export class MenuList extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let list = this.props.list.map((obj, idx)=>{
            return (<Menu {...obj} key={idx} />);
        })
        return(
            <ul className="sm-menulist">
                {list}
            </ul>
        );
    }
}