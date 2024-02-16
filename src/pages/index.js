import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import GitHubButton from 'react-github-btn'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import photo from '../../content/images/me.jpeg'

export default class Index extends Component {
  render() {
    const latestPostEdges = this.props.data.latest.edges
    const popularPostEdges = this.props.data.popular.edges

    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – Web Developer`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <div>
              <h1>Hey! I'm Chetan Godhani.</h1>
              <p>
                I'm a Software Engineer, specializing in web technologies like React.js, Node.js, Laravel, and Go. I enjoy crafting sleek interfaces and building powerful systems. Currently exploring Go, React Native and DevOps concepts alongside my day job.
              </p>
              <div className="social-buttons">
                <div>
                  <a
                    className="twitter-follow-button"
                    href="https://twitter.com/cdgodhani"
                    data-size="large"
                    data-show-screen-name="false"
                  >
                    Follow @cdgodhani
                  </a>
                </div>
                <div>
                  <GitHubButton
                    href="https://github.com/chetan8300"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Follow @chetan8300 on GitHub"
                  >
                    Follow
                  </GitHubButton>
                </div>
              </div>
            </div>
            <img
              src={photo}
              className="lite-icon"
              title="Hi i'm Chetan"
              alt="Hi i'm Chetan"
              style={{ borderRadius: '50%' }}
            />
          </div>
        </div>

        <div className="container">
          <section className="section">
            <h2>Latest Articles</h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>

          {popularPostEdges.length > 0 &&
            <section className="section">
              <h2>Most Popular</h2>
              <PostListing simple postEdges={popularPostEdges} />
            </section>
          }
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMdx (
      limit: 6
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 150, height: 150)
              }
            }
            date
            template
            slug
            date
          }
        }
      }
    }
    popular: allMdx (
      limit: 6
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 150, height: 150)
              }
            }
            date
            template
            slug
            date
          }
        }
      }
    }
  }
`
