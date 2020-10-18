import React, {Component} from 'react';

class Memo extends Component {
    render(){
        return(
            <div id={this.props.id}>
                <div>
                    <span onClick={(e)=>{}} >X</span>
                </div>
                {this.props.memo}
            </div>
        )
    }
}
export default Memo;