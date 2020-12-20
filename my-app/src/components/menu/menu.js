import React, {Component} from 'react';
import './menu.css'

class Menu extends Component {
    
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <>
                <div className={this.props.classNm}>
                    {this.props.name}
                </div>
            </>
        )
    }
}

Menu.defaultProps = {
    classNm : "sm-menu",
    name : "Button01"
}

export default Menu;