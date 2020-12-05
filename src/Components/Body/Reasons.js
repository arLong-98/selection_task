import React, {Component} from 'react';

import Card from '../Card';
import ReasonList from './ReasonList';
import ChildrenCard from '../ChildrenCard';


class Reasons extends Component{
    state = {
        cName:{
            bg: "bg-dark"
        }
    }
    render(){
        return(
            <Card cName={this.state.cName} img={false} button={false} title="Reasons You'll Love Us Too!" subtitle="Our strength is seeing what doesn,t exist yet" children={ChildrenCard(ReasonList)} /> 
        )
    }
}



export default Reasons;