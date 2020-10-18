import React, {Component} from 'react';
import Header from "./components/header";
import Body from "./components/body";

class Memo extends Component {
    constructor(){
        super();
        this.addMemo("TEST_2","NewTestMemo")
    }
    state = {
        memos : [
            {
                id   : "MEMO_1",
                memo : "TEST MEMO"
            }
        ]
    }
    addMemo = (id, memo) =>{
        this.state.memos.push({
            "id" : id,
            "memo" : memo
        });
    }
    render(){
        
        return (
            <div className="wrapper">  
                <Header onCreateMemo={this.onCreateMemo}/>
                <Body memos={this.state.memos}/>
            </div>
        )
    }
    onCreateMemo = function()
    {

    }
    onCloseMemo = function()
    {  
        alert('Test');
    }
}

export default Memo;