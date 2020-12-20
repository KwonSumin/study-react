import React, {Component} from 'react';
import "./List.css";

export default class BoardList extends Component { 

    constructor(props)
    {
        super(props);
        
    }

    render(){
        var list = this.props.list.map(function(data){
            return (<div className="board-body">
                <span className="board-body-idx">{data.idx}</span>
                <span className="board-body-title">{data.title}</span>
                <span className="board-body-name">{data.name}</span>
            </div>)
        });
        return (
            <div>
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