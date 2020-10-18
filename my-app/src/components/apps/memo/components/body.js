import React, {Component} from 'react';
import Memo from "./body/memo";

class Body extends Component {
    render(){
        const {memos} = this.props;
        var memoList = memos.map(
            ({id, memo})=>(
                <Memo
                    key={id} 
                    memo={memo}
                    oncloseMemo={"teset"}
                />
            )
        );
        return (
            <div>
                {memoList}
            </div>
        );
    }
}
export default Body;