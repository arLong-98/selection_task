import './contact.css'

const ContactForm = ()=>{
    return(
        <form className="form-control">
            <input type="text" placeholder="Full Name" name="fname" />
            <input type="text" placeholder="Email" name="email" />
            <button className="form-btn">Submit</button>
        </form>
    )
}

export default ContactForm;