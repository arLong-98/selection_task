import React, { Component } from 'react'

import Card from '../Card';
import TeamList from './TeamList';
import ChildrenCard from '../ChildrenCard';

class Team extends Component{
    render(){
        return(
            <Card cName="" img={false} button={false} title="Meet The Team" subtitle="Alumni of IIT Bombay at your service" children={ChildrenCard(TeamList)} />
        )
    }
}

export default Team;