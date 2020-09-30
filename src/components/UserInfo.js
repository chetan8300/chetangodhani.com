import React, { Component } from 'react'
import coffee from '../images/coffee.svg'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <p>
             Hi I'm Chetan, a Web Developer from Ahmedabad, India.
             Working on technologies like PHP, Laravel, Node.JS, React.JS, etc.
            </p>
            <a href="https://ko-fi.com/chetangodhani" className="donate-button" target="_blank">
              Buy me a coffee <img src={coffee} className="coffee-icon" />
            </a>
          </div>
          <div className="flex-avatar">
            <img className="avatar" src={`https://www.gravatar.com/avatar/72d1a6cdbdfbe17b98b6510e908683c9?s=150`} />
          </div>
        </div>
      </aside>
    )
  }
}