import React, {useRef, useEffect, createRef, useState, useImperativeHandle} from 'react'
import './button.css'

const Button = React.forwardRef((props,ref)=>{
   
    let [num, setNum] = useState(0);
    const comp = useRef(null);
    function onClick(){
        setNum(num+1);
    }
    useImperativeHandle(ref, ()=>{
        return {current : comp.current, num : num};
    },[num])
    return (
        <>
            <div ref={comp} {...props} className="sm-btn" >{props.name}</div>
        </>
    )
});

Button.defaultProps = {
    name : "button"
}


export default Button;