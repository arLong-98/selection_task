import React, { Component } from 'react'
import Intro from './Intro';
import Team from './Team';
import Reasons from './Reasons';


class Body extends Component{
    render(){
        return (
        <div>
            <Intro />
            <Reasons />
            <Team />
        </div>
        )
    }
}

export default Body;