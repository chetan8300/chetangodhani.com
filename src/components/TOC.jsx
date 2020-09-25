import React from 'react'
import { Link } from 'gatsby'

const TOC = ({ headings }) => {
  return (
    <React.Fragment>
      <h3 style={{ fontWeight: 600, fontSize: 24 }}>Table of contents</h3>
      <ul>
        {headings.map(heading => (
            <li key={heading.id}>
              <Link to={'#' + heading.id}>{heading.title}</Link>
            </li>
          ))}
      </ul>
    </React.Fragment>
  )
}

export default TOC;