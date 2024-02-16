import React, { Component } from 'react'
import coffee from '../images/coffee.svg'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <p>
              Hey there, I'm Chetan, a Software Engineer based in London, Ontario. I'm all about using the latest and greatest tech to build amazing things. From crafting interactive interfaces with React.js to powering up back-end systems with Node.js, PHP, and Laravel, I thrive on turning ideas into reality. Whether it's solving complex problems or diving into new technologies like Go, I'm always up for the challenge and eager to push the boundaries of what's possible in the world of software engineering.
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