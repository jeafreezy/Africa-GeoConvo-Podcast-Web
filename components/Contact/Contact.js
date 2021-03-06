import React from 'react';
import {TitleStyles} from '../utilsStyles';
import { ContactUsStyle } from '../Styles/Contact';
import * as emailjs from 'emailjs-com';

class Contact extends React.PureComponent{

    constructor(props) {

        super(props);

        this.state = {
          name: '',
          email: '',
          subject: '',
          message: '',
          messageSent : 'Shoot'
        };

      }

     handleSubmit = event=> {
        event.preventDefault();
        const { name, email, subject, message } = this.state;

        const templateParams = {
          from_name: name,
          from_email: email,
          to_name: 'Africa GeoConvo',
          subject,
          message_html: message,
        };

        emailjs.send(
            'service_99xv7qd',
            'template_nsz6aqj',
            templateParams,
          'user_uaDKtXNr0iHOGc9Fa776j'

        ).then((response)=>{

            if(response.status == 200){
                this.setState({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                    messageSent : 'Email sent! We\'ll reach out shortly'
                })
            }else{
                this.setState({messageSent : 'An error just occured,please try again later'})
            }
        })
      };


    handleChange = event => {

        this.setState({ [event.target.name]: event.target.value });
    }
    render(){
        const { name, email, subject, message } = this.state;
        return(
        <div id='contact'>
            <TitleStyles>Contact Us</TitleStyles>
            <ContactUsStyle>
                <div className='container'>

                    <div className='contact-form'>

                            <p>We would love to discuss your ideas on our show.</p>

                            <div>
                                <form onSubmit={this.handleSubmit}>
                                    <input name="name" type='text' placeholder='Your name' value={name} onChange={this.handleChange} required></input>
                                    <input name="email" type='email'placeholder='email@mail.com' value={email} onChange={this.handleChange} required></input>
                                    <input type='text' name="subject" placeholder='What is the Subject?' value={subject} onChange={this.handleChange} required></input>
                                    <input name="message" type='textarea' placeholder='Tell us more...' value={message} onChange={this.handleChange} required></input>
                                    <button type='submit'>{this.state.messageSent}!</button>
                                </form>

                            </div>

                    </div>
                    

                </div>
            </ContactUsStyle>
        </div>
    )}
}


export default Contact;