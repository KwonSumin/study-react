import React, {Component} from 'react';
import './btn.css'
export class Button extends Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
        this.executeFn = this.executeFn.bind(this);
        this.hasCallback = this.hasCallback.bind(this);

        this.ref = React.createRef();
    }

    onClick(e){
        this.executeFn("beforeClick");
        try {
            this.executeFn("validateClick")
            this.executeFn("btnClick");
        } catch(error) {
            this.executeFn("btnClickError",error);
        }
        this.executeFn("afterClick");
    }

    executeFn(fnName,...args){
        if( this.hasCallback(fnName) ) {
            return this[fnName](this,...args);
        }
    }

    hasCallback(fnName) {
        return this[fnName] && typeof(this[fnName]) == "function";
    }

    render(){
        return(
            <>
                <div className="sm-button" onClick={this.onClick}>{this.props.name}</div>
            </>
        )
    }
}

Button.defaultProps = {
    name : "Button"
}
export default Button;