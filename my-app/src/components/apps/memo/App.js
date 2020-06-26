import React, {Component} from 'react';
import Header from "./components/header";
import Body from "./components/body";

class Memo extends Component {
    render(){
        return (
            <div className="wrapper">  
                <Header/>
                <Body/>
            </div>
        )
    }
}

export default Memo;