
class Map {
    constructor(props){
        this.state = {
            name : [],
            value : []
        }   
    }
    put = function(key, value){
        var findNmIdx = this.state.name.indexOf(key);
        var isNotFind = findNmIdx == -1;
        if( isNotFind ) {
            findNmIdx = this.state.name.length;
        }
        this.state.name[findNmIdx] = key;
        this.state.value[findNmIdx] = value
    }
    toString = function(){
        var str = "";
        var name;
        var value;
        for(var i=0; i<this.state.name.length; i++) {
            name = this.state.name[i];
            value = this.state.value[i];
            str +=name + " : " + value;
            if( i<this.state.name.length-1 ) {
                str += ", "
            }
        }

        return str;
    }
}

export default {Map};