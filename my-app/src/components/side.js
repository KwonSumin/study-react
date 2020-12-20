import React from 'react';

function side(props){
    if( props == null ) props = {};
    if( props['classNm'] == null ) props['classNm'] = 'sm-side';

    return(
        <>
            <div className={props.classNm}>
                Side
            </div>
        </>
    )
}
export default side;

