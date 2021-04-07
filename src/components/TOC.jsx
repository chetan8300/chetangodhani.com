import React from 'react'
import { Link } from 'gatsby'

const TOC = ({ headings }) => {

  const recursiveList = data => {
    return (
      <ul>
        {data.map(heading => (
            <li key={heading.id}>
              <Link to={'#' + heading.id}>{heading.title}</Link>
              {heading.children ? recursiveList(heading.children) : null}
            </li>
          ))}
      </ul>
    );
  }

  return (
    <React.Fragment>
      <h3 style={{ fontWeight: 600, fontSize: 24 }}>Table of contents</h3>
      {recursiveList(headings)}
    </React.Fragment>
  )
}

export default TOC;