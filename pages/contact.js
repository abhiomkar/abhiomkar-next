import React from 'react';
import axios from 'axios';
import Layout from '../components/layout';
import Button from '@material/react-button';

const MAILGUN_API_URL =
    'https://us-central1-abhiomkar-in.cloudfunctions.net/sendMail';

class Contact extends React.Component {
  state = {
    contactSubject: '',
    contactSenderEmail: '',
    contactBody: '',
    inProgress: false,
    hasError: false,
    statusBarMessage: '',
  };

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      hasError: false,
      statusBarMessage: '',
      inProgress: true,
    });

    const data = {
      subject: this.state.contactSubject,
      body: this.state.contactBody,
      sender: this.state.contactSenderEmail,
    };

    axios.post(MAILGUN_API_URL, data)
    .then(() => {
      this.setState({statusBarMessage: 'Mail sent'});
      this.resetForm();
    })
    .catch(() => {
      this.setState({
        statusBarMessage: `Couldn't send. Please try again later.`,
        hasError: true,
      });
    })
    .then(() => {
      this.setState({
        inProgress: false,
      });

      setTimeout(() => {
        this.setState({
          hasError: false,
          statusBarMessage: '',
        })
      }, 8000);
    });
  }

  resetForm() {
    this.setState({
      contactSubject: '',
      contactBody: '',
      contactSenderEmail: '',
    })
  }

  render() {
    return (
    <Layout>
      <div className='container'>
      <div className='content'>
        <div className='contact-card paper-card'>
          <div className='profile-container'>
            <div className='avatar'>
            </div>
            <div className='name'>
              Abhinay Omkar
            </div>
            <div className='slide-container'>
              <div className='about-section is-visible'>
                <div className='email'>
                  <a href='mailto:abhiomkar@gmail.com'>abhiomkar@gmail.com</a>
                </div>
                <div className='location'>
                  Bangalore, India
                </div>
                <div className='social-links'>
                  <a className='facebook-link social-link' href='https://facebook.com/abhiomkar'>
                    <svg className='facebook-logo' viewBox='0 0 58 58'><path className='cls-1' d='M54.8,0H3.2A3.2,3.2,0,0,0,0,3.2V54.8A3.2,3.2,0,0,0,3.2,58H31V35.57H23.45V26.79H31V20.33c0-7.49,4.58-11.57,11.26-11.57A64.2,64.2,0,0,1,49,9.1v7.83h-4.6c-3.64,0-4.35,1.72-4.35,4.26v5.59h8.7l-1.13,8.78H40V58H54.8A3.2,3.2,0,0,0,58,54.8V3.2A3.2,3.2,0,0,0,54.8,0Z'/><path id='f' className='cls-2' d='M40,58V35.57h7.57l1.13-8.78H40V21.2c0-2.54.71-4.26,4.35-4.26H49V9.1a64.2,64.2,0,0,0-6.75-.34C35.56,8.76,31,12.84,31,20.33v6.46H23.45v8.78H31V58Z'/></svg>
                  </a>
                  <a className='twitter-link social-link' href='https://twitter.com/abhiomkar'>
                    <svg className='twitter-logo' version='1.1' id='White' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'
                      viewBox='0 0 400 400' style={{enableBackground: 'new 0 0 400 400'}}>
                      <path className='st0' d='M400,200c0,110.5-89.5,200-200,200S0,310.5,0,200S89.5,0,200,0S400,89.5,400,200z M163.4,305.5
                        c88.7,0,137.2-73.5,137.2-137.2c0-2.1,0-4.2-0.1-6.2c9.4-6.8,17.6-15.3,24.1-25c-8.6,3.8-17.9,6.4-27.7,7.6
                        c10-6,17.6-15.4,21.2-26.7c-9.3,5.5-19.6,9.5-30.6,11.7c-8.8-9.4-21.3-15.2-35.2-15.2c-26.6,0-48.2,21.6-48.2,48.2
                        c0,3.8,0.4,7.5,1.3,11c-40.1-2-75.6-21.2-99.4-50.4c-4.1,7.1-6.5,15.4-6.5,24.2c0,16.7,8.5,31.5,21.5,40.1c-7.9-0.2-15.3-2.4-21.8-6
                        c0,0.2,0,0.4,0,0.6c0,23.4,16.6,42.8,38.7,47.3c-4,1.1-8.3,1.7-12.7,1.7c-3.1,0-6.1-0.3-9.1-0.9c6.1,19.2,23.9,33.1,45,33.5
                        c-16.5,12.9-37.3,20.6-59.9,20.6c-3.9,0-7.7-0.2-11.5-0.7C110.8,297.5,136.2,305.5,163.4,305.5'/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='progress-bar'></div>
          <form className='contact-form' id='contact-form' onSubmit={(e) => this.handleSubmit(e)}>
            <div className='form-row form-row-subject'>
              <label htmlFor='contact-subject'>Subject</label>
              <input
                  type='text'
                  aria-label='Email subject'
                  name='contactSubject'
                  id='contact-subject'
                  className='contact-subject'
                  onChange={(e) => this.handleInputChange(e)}
                  value={this.state.contactSubject}
                  placeholder='Enter subject here' />
            </div>
            <div className='form-row form-row-from'>
              <label htmlFor='contact-from'>From</label>
              <input type='text'
                  aria-label='Your email id'
                  name='contactSenderEmail'
                  id='contact-sender-email'
                  className='contact-from'
                  onChange={(e) => this.handleInputChange(e)}
                  value={this.state.contactSenderEmail}
                  placeholder='elon@spacex.com' />
            </div>
            <div className='form-body-row'>
              <label htmlFor='contact-body'>Message</label>
                <textarea name='contactBody'
                    id='contact-body'
                    className='contact-form-body'
                    placeholder='Enter your message here'
                    aria-label='Email body to send message'
                    onChange={(e) => this.handleInputChange(e)}
                    value={this.state.contactBody}>
                </textarea>
              <Button raised aria-label='Send email action button'
                className='form-submit-button'
                disabled={this.state.inProgress}>
                {this.state.inProgress ? 'Sending' : 'Send' }
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className={`status-bar ${this.state.hasError ? 'has-error' : ''}
          ${this.state.statusBarMessage ? 'is-visible' : ''}`}>
        {this.state.statusBarMessage}
      </div>
    </div>
  </Layout>
    );
  }
}

export default Contact;
