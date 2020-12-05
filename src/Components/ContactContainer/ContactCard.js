import React, { Component } from 'react'

class ContactCard extends Component{
    
    render(){
        return(
            <div className={["contact-card-container", this.props.cName].join(' ')}>
                <h4 className="contact-title">{this.props.title}</h4>
                <div className="contact-body">
                    {this.props.children || this.props.body}
                </div>
            </div>
        )
    }
}

export default ContactCard;