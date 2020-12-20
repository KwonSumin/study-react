import React from 'react';
import Head from './components/head'
import Side from './components/side'
import Foot from './components/foot'
import Content from './components/content'
import './App.css';

//import { BrowserRouter, Link } from 'react-router-dom';

function App() {

  function test(name, e){
    console.log("test");
  }

  return (
    <>
      <div className="sm-layout">
        <Head />
        <div className="sm-main">
          <Side classNm="sm-lside"/>
          <Content />
        </div>
        <Foot/>
      </div>
    </>
  );

}



export default App;
