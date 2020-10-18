import React, {Component} from 'react';
import "./icons.css";

export default class Icon extends Component{

    constructor(props){
        super(props);
        this.state = {

           select : false,
            file : {
                src : "/files/Test"
            },
            wrapper : ""
        };
        this.setEventBind();
        this.setCustomEvent();
        
    }

    setSelect = (flag) =>{
        var wrapper = this.state.wrapper;
        this.setState({select : flag});
        if(flag){
            const id = this.props.id;
            wrapper.classList.replace("none-select", "selected");
        } else {
            wrapper.classList.replace("selected", "none-select");
        }
    }
    setFile = (filePath) =>{
        this.setState({file:{src:filePath}})
    }
    setEventBind = ()=>{
        this.onClick = this.onClick.bind(this);
    }
    setCustomEvent = ()=>{
        this.onSelect           = this.onSelect.bind(this);
        this.onSelectOut        = this.onSelectOut.bind(this);
        this.setSelect          = this.setSelect.bind(this);
        this.onDoubleClick      = this.onDoubleClick.bind(this);
    }
    
    onDoubleClick = (e)=>{
        console.log("TMP DOUBLE CLICK EVENT START");
        console.log(this);
        console.log("TMP DOUBLE CLICK EVENT END");
        if( this.props.onDoubleClick ) this.props.onDoubleClick(e);
    }

    onSelect = (e)=>{
        var wrapper = this.state.wrapper;
        const id = this.props.id;
        wrapper.classList.replace("none-select", "selected")
        e.comp = this;
        if( this.props.onSelect ) this.props.onSelect(e);
        
    }
    onSelectOut = (e)=>{
        var wrapper = this.state.wrapper;
        wrapper.classList.replace("selected", "none-select")
    }
    onClick = (e)=>{
        const isSelected = this.state.select;
        if(isSelected) {
            this.setState({select : false});
            this.onSelectOut(e);
        } else {
            this.setState({select: true});
            this.onSelect(e);
        }
    }
    render(){
        
        return (
            <div id={this.props.id} 
                className="sm-icon-wrapper none-select" 
                ref={ref=>{this.state.wrapper = ref;}} 
                onClick={this.onClick} 
                onDoubleClick={this.onDoubleClick}
            >
                <img src={this.props.src}></img>
                <div className="sm-icon-title">{this.props.name}</div>
            </div>
        )
    }

}
Icon.defaultProps = {
      name : 'ICON'
    , src  : '/icons/50PX/icons8-file-50.png'
}