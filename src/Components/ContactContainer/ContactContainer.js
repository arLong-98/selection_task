import React, { Component } from 'react'
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';
import './contact.css'

class ContactContainer extends Component{
    render(){
        return(
            <div className="contact-container">
                <ContactCard title="CONTRACTORS" />
                <ContactCard title="COMAPNY" />
                <ContactCard title="CONTACT FORM" body={ContactForm()} />
                <ContactCard title="ABOUT APNA HOME" body="Ipsum at eos voluptua eirmod amet labore, tempor tempor duo kasd eos sanctus sed, dolor dolor vero consetetur at justo.. Ipsum at eos voluptua eirmod amet labore, tempor tempor duo kasd eos sanctus sed, dolor dolor vero consetetur at justo.. Ipsum at eos voluptua eirmod amet labore, tempor tempor duo kasd eos sanctus sed, dolor dolor vero consetetur at justo.." />
            </div>
        )
    }
}

export default ContactContainer;