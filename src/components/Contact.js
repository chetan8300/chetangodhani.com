import React, { Component } from 'react'
// import NewsletterForm from './NewsletterForm'

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Contact Me</h1>
        <p>
          You can send me a message on either of the below listed contact details.
        </p>
        <p>You can find me around the web:</p>
        <ul>
          <li>
            <strong>Email</strong>: <a href="mailto:chetangodhani9@gmail.com">chetangodhani9@gmail.com</a>
          </li>
          <li>
            <strong>Twitter</strong>:{' '}
            <a target="_blank" href="https://twitter.com/cdgodhani">
              cdgodhani
            </a>
          </li>
          <li>
            <strong>LinkedIn</strong>:{' '}
            <a target="_blank" href="https://linkedin.com/in/chetangodhani">
              Chetan Godhani
            </a>
          </li>
        </ul>
      </React.Fragment>
    )
  }
}