import React, {Component} from 'react';
import Icon from "./icon";

export default class IconList extends Component{

    constructor(props){
        super(props);
        this.state = {
            iconList : [
                {name : "ICON1", src:"/icons/50PX/icons8-file-50.png"},
                {name : "ICON2", src:"/icons/50PX/icons8-file-50.png"}
            ],
            iconRef : []
            
        }
        this.setEvent();
    }
    


    setEvent = ()=>{
        this.onClick = this.onClick.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }

    onClick = (e)=>{
        var index = e.comp.props.id
        var obj = this.state.iconRef[index];
        
        console.log(e);
        if( e.shiftKey == false ) {
            for(var t in this.state.iconRef){
                if( index == this.state.iconRef[t].props.id ) {
                    continue;
                }
                this.state.iconRef[t].setSelect(false);
                
            }    
        }
    }

    onSelect = (e)=>{
        var list = this.state.iconList;
        for(var t in list)
        {
            
        }
    }

    render(){
           
        var onClick = this.onClick;
        const list = this.state.iconList.map((icon,i)=>{
            const onSelect = this.onSelect; 
            return (
                <Icon name={icon.name} src={icon.src} key={i} id={i} onSelect={onSelect} ref={ref=>{this.state.iconRef[i] = ref}}/> 
            )
        })
        
        return (
            <div onClick={onClick}>
                {list}
            </div>
        )
    }

}
IconList.defaultProps = {
    
}