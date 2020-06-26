import React, {Component} from 'react';
import Memo from "./body/memo";

class Body extends Component {
    render(){
        return (
            <div>
                <Memo memo="Test Memo"/>
                <Memo memo="Test Memo2"/>
            </div>
        )
    }
}
export default Body;