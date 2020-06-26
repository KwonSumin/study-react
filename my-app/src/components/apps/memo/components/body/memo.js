import React, {Component} from 'react';

class Memo extends Component {
    render(){
        return(
            <div>
                {this.props.memo}
            </div>
        )
    }
}
export default Memo;