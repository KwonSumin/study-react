import React, { Component } from 'react'
import List2 from "./list2";
import { BrowserRouter as Router, Route } from 'react-router-dom';
class List extends Component {
    render(){
        return(
            <div>
                <div>TEST LIST</div>
                
                <Route path="/list/list2" component={List2} />
            </div>
        )
    }
}

export default List;