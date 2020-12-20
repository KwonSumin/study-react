import React, {Component} from 'react';

var Cmm = {};

class CustComponent extends Component{
    constructor(props){
        super(props);
        for(var key in props) {
            if( key.substr(0, 2) == "on" ) {
                console.log(key)
                
            }
        }
    }

    //전체이벤트 리스너 수행.
    handle(name,e){
        console.log(name);
    }

}
Cmm = {...Cmm, CustComponent}
export default Cmm;