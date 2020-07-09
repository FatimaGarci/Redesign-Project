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
        console.log("Stopped listening per click")
      }
    }

    recognition.onstart = () => {
      console.log("Listening!")
    }

    let finalTranscript = ''
    recognition.onresult = event => {
      let interimTranscript = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interimTranscript += transcript;
      }
      document.getElementById('interim').innerHTML = interimTranscript
      document.getElementById('final').innerHTML = finalTranscript

      //-------------------------COMMANDS------------------------------------

      const transcriptArr = finalTranscript.split(' ')
      const stopCmd = transcriptArr.slice(-3, -1)
      console.log('stopCmd', stopCmd)

      if (stopCmd[0] === 'stop' && stopCmd[1] === 'listening') {
        recognition.stop()
        recognition.onend = () => {
          console.log('Stopped listening per command')
          const finalText = transcriptArr.slice(0, -3).join(' ')
          document.getElementById('final').innerHTML = finalText
        }
      }
    }

    //-----------------------------------------------------------------------

    recognition.onerror = event => {
      console.log("Error occurred in recognition: " + event.error)
    }

  }

  render() {
    return (
      <div  className={classes.All}>
        <section className={classes.Showcase}>
          <div className={classes.VideoContainer}>
            <video src={Video} autoPlay muted loop></video>
          </div>
          <div className={classes.Content}>

            <div className={classes.Logo}>
              <img src={Logo} alt="logo" className={classes.LogoImg} onClick={this.toggleListen} />
              <h1>WikipediA</h1>
              <p>The Free Encyclopedia</p>
              <Form.Control as="select" id='final'>
                <option>English</option>
                <option>Português</option>
                <option>Español</option>
                <option>Русский</option>
                <option>日本語</option>
                <option>Français</option>
                <option>中文</option>
                <option>Deutsch</option>
                <option>Italiano</option>
                <option>Polski</option>
              </Form.Control>
            </div>
          </div>
        </section>
        {/* <div>
        <div id='interim' ></div>
        <div id='final' ></div>
      </div> */}

        <section className={classes.Footer}><Footer />
        </section>
      </div>
    )
  }
}

export default Speech;
