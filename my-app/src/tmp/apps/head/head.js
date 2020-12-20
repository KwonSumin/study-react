import React from 'react';
import Menu, { SlideMenu } from '../../menu/menu';
import { BrowserRouter, Link } from 'react-router-dom';
//import './head.css'

export default function Head(props){
    let menulist = [{name : "Menu01"}, {name : "Menu02"}];
    var main = {name : "mainMenu01"};
    var sub = [
        {name : "subMenu01", link : "/sub1"},
        {name : "subMenu02", link : "/sub2"}
    ]
    return (
        <BrowserRouter className="sm-top-menu">
            <Menu name="Menu01" link="/test"/>
            <SlideMenu sub={sub} main={main} />
        </BrowserRouter>
    )
}