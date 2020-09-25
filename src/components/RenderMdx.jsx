import React, { Component } from 'react'

import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react'

import Contact from "./Contact";
import TOC from './TOC';

export default class RenderMdx extends Component {
  render() {
    return (
      <MDXProvider components={{ Contact, TOC }}>
        <MDXRenderer>
          {this.props.body}
        </MDXRenderer>
      </MDXProvider>
    )
  }
}