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
            process.env.NEXT_PUBLIC_SERVICE,
            process.env.NEXT_PUBLIC_TEMPLATE,
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
                    


                    <div className='contacts'>

                        <div className='top-image'>
                            <img src='/static/assets/email.png' alt='Email icon'></img>
                            <p><a href="mailto:africageoconvo@gmail.com">africageoconvo@gmail.com</a></p>
                        </div>
                        <div className='contact-image'>
                            <img src='/static/assets/google-maps.png' alt='location icon'></img>
                            <p>Africa</p>
                        </div>
                        <div className='contact-image'>
                        
                            <a href='https://twitter.com/Africageoconvo' target='_blank'><img src='/static/assets/twitter.png' width='30px' height='25px' title='Follow us on twitter'></img></a>
                            <p>Twitter</p>
                        </div>
                    </div>

                </div>
            </ContactUsStyle>
        </div>
    )}
}


export default Contact;