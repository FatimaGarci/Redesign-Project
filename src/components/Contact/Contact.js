import React, { Component } from 'react';
import classes from './Contact.module.css';
import Footer from '../Footer/Footer';


const initialState = {
    name: "",
    email: "",
    nameError: "",
    emailError: ""
}

class Contact extends Component {
    state = initialState;
    handleChange = event => {
        console.log(event.target)
        this.setState({[event.target.name]: event.target.value});
      };

    validate = () => {
        let nameError = "";
        let emailError = "";

        if (!this.state.name) {
          nameError = "name cannot be blank";
        }

        if (!this.state.email.includes("@")) {
            emailError = "invalid email";
          }
    
        if (emailError || nameError) {
          this.setState({ emailError, nameError });
          return false;
        }
    
        return true;
      };

      handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
          console.log(this.state);
          // clear form
          this.setState(initialState);
        }
      };


    render () {
        return(
            <div style={{backgroundColor: "#f2f2f2"}}>
            <div className={classes.ContactContainer}>
            <div className={classes.ContactUs}>
            <h1>Contact Us!</h1>
            <p>Please fill out the form below to contact us</p>
            </div>

            <form onSubmit={this.handleSubmit}>

            <div className={classes.Spacing}><label for="name">Name</label>
            <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} /> <br />
           <div style={{ fontSize: '2rem', color: 'red' }}>{this.state.nameError}</div>
            </div>

            <div className={classes.Spacing}><label for="email">Email</label>
            <input type="text" name="email" id="email" value={this.state.email} onChange={this.handleChange} /> <br />
            <div style={{ fontSize: '2rem', color: 'red' }}>{this.state.emailError}</div></div>


            <label for="suggestion">Message</label><br />
            <textarea name="suggestion" id="suggestion" value={this.state.message} onChange={this.handleChange}></textarea><br />
            
            <button type="submit" onClick={this.state.handleSubmit}>Submit</button>

            </form>
            <Footer />
            </div>
            </div>
        )
    }
}

export default Contact;