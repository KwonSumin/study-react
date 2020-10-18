import React, {Component} from 'react';
import List from "./List";

export default class BoardList extends Component { 

    constructor(props)
    {
        super(props);
        
    }

    render(){
        var list = this.props.list.map(function(data){
            return (
                <div>
                    <List list={list}></List>
                </div>
            )
        });
        return (
            <div>
                <span>No.</span><span>제목</span><span>등록자</span>
                {list}
            </div>
        )
    }

}

BoardList.defaultProps = {
    list : [{
        'idx' : 0,
        'title' : 'TEST TILE',
        'name' : 'TEST_NM'
    }]
};