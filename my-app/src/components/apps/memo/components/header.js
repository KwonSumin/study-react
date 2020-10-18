import React, {Component} from 'react';

class Header extends Component {
    render(){
        return (
            <div>
                <span onClick={(e)=>{
                    this.props.onCreateMemo();
                }}>X</span>
            </div>
        )
    }
}
export default Header;