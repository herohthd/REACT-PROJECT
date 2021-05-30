import React from 'react';
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import FixedNav2 from '../components/FixedNav2'
import emailjs from 'emailjs-com';
import '../styles/style.scss'

class Contact extends React.Component {
    ValidateEmail(mail) 
    {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
        {
            return (true)
        }
            return (false)
    }
    sendEmail(e) {
        e.preventDefault();
        if(this.ValidateEmail){
            emailjs.sendForm('service_1djgpz8', 'template_673u2ko', e.target, 'user_mWGHyNTznGLPcYRbzqn5X')
            .then((result) => {
                console.log(result.text);
                alert("Send message successfully!")
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
        }
        else{
            alert("You have entered an invalid email address!")
        }
    }    
    render(){
        return(
            <section className="contact-container">
                <Nav/>
                <FixedNav2/>
                <div className="container">
                    <div className="contact-form">
                        <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.640944302602!2d105.840947314883!3d21.00702528601013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac76ccab6dd7%3A0x55e92a5b07a97d03!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1621327746381!5m2!1svi!2s" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                        <div className="contact">
                            <h3 className="contact__title">Contact us</h3>
                            <hr/>
                            <form className="contact__form flex" onSubmit={this.sendEmail}>
                                <div className="form-infor flex">
                                    <div className="form-group flex">
                                        <label>Your name</label>
                                        <input type="text" name="name" />
                                        <label>Your email</label>
                                        <input type="email" name="email" />
                                        <input type="submit" value="Send Message" className="btn"/>
                                    </div>
                                    <div className="form-group flex">
                                        <label>Your Message</label>
                                        <textarea name="message" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer/>
            </section>
        )
    }

}
export default Contact;