import React, { Component } from "react"
import classes from './Landing.module.css';
import Logo from '../img/logo.png';
import Video from '../img/background.mp4';
import Footer from '../Footer/Footer';
import Form from 'react-bootstrap/Form';


//------------------------SPEECH RECOGNITION-----------------------------
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continous = true
recognition.interimResults = true
// recognition.lang = 'en-US'


//------------------------COMPONENT-----------------------------

class Speech extends Component {

  constructor() {
    super()
    this.state = {
      listening: false
    }
    this.toggleListen = this.toggleListen.bind(this)
    this.handleListen = this.handleListen.bind(this)
  }

  toggleListen() {
    this.setState({
      listening: !this.state.listening
    }, this.handleListen)
  }

  handleListen() {

    console.log('listening?', this.state.listening)

    if (this.state.listening) {
      recognition.start()
      recognition.onend = () => {
        console.log("...continue listening...")
        recognition.start()
      }

    } else {
      recognition.stop()
      recognition.onend = () => {
        console.log("Stopped listening when click")
      }
    }

    recognition.onstart = () => {
      console.log("Listening!")
    }

    recognition.onresult = event => {
      var last = event.results.length - 1;
      var command = event.results[last][0].transcript;

      if (command.toLowerCase() === 'select English') {
        return document.getElementById("mySelect").options.namedItem("English").text;
        // document.getElementById("English").options[0] = true;
      }
      else if (command.toLowerCase() === 'Escolher Português') {
        return document.getElementById("mySelect").options.namedItem("Português").text;
        // document.getElementById("Português").selected = true;
      }
      else if (command.toLowerCase() === 'selecciona Spañol') {
        return document.getElementById("mySelect").options.namedItem("Español").text;
        // document.getElementById("Español").selected = true;
      }
    }

    //-----------------------------------------------------------------------

    recognition.onerror = event => {
      console.log("Error occurred in recognition: " + event.error)
    }

  }

  render() {
    return (
      <div className={classes.All}>
        <section className={classes.Showcase}>
          <div className={classes.VideoContainer}>
            <video src={Video} autoPlay muted loop></video>
          </div>
          <div className={classes.Content}>

            <div className={classes.Logo}>
              <img src={Logo} alt="logo" className={classes.LogoImg} onClick={this.toggleListen} />
              <h1>WikipediA</h1>
              <p>The Free Encyclopedia</p>

              <Form.Control as="select" id="mySelect" >
                <option id="Português">Português</option>
                <option id="English">English</option>
                <option id="Español">Español</option>
                <option id="Italiano">Italiano</option>
              </Form.Control>

            </div>
            <div id='message'></div>
          </div>
        </section>
        
        <section className={classes.Footer}><Footer />
        </section>
      </div>
    )
  }
}

export default Speech;
