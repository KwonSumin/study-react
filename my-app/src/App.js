import React, {useEffect, useState, useRef, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './components/apps/head/head';


//import Apps
import Button from './components/fns/button'
function App() {
  let [state, setState] = useState("0");
  let btn = useRef(null);
  function onClick(e){
    setState(parseInt(state) + 1 );
  }

  console.log(btn.current)
  
  return (
    <>
      <Head />
      <input readOnly value={state} />
      <Button onClick={onClick} ref={btn}  />
    </>
  );
}



export default App;
