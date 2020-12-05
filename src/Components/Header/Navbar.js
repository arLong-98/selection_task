import React, { Component } from 'react'
import {NavItems} from './NavItems';
import './NavBar.css';

class NavBar extends Component{

    render(){
        return (
            <nav className="NavBarItems">
                <h1 className="NavBarLogo">Apna Home</h1>
                <div className="MenuIcon">

                </div>
                <ul className={"NavMenu"}>
                    {NavItems.map((item, index)=>{
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default NavBar;