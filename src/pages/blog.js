import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import _ from 'lodash'

export default class BlogPage extends Component {
  state = {
    searchTerm: '',
    currentCategories: [],
    posts: this.props.data.posts.edges,
    filteredPosts: this.props.data.posts.edges,
  }

  handleChange = async event => {
    const { name, value } = event.target

    await this.setState({ [name]: value })

    this.filterPosts()
  }

  filterPosts = () => {
    const { posts, searchTerm, currentCategories } = this.state

    let filteredPosts = posts.filter(post => {
      if (post.node.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return true
      }
    })

    if (currentCategories.length > 0) {
      filteredPosts = filteredPosts.filter(post => {
        if (
          post.node.frontmatter.categories &&
          currentCategories.every(cat => post.node.frontmatter.categories.includes(cat))
        ) {
          return true
        }
      })
    }

    this.setState({ filteredPosts })
  }

  updateCategories = category => {
    const { currentCategories } = this.state

    if (!currentCategories.includes(category)) {
      this.setState(prevState => ({
        currentCategories: [...prevState.currentCategories, category],
      }))
    } else {
      this.setState(prevState => ({
        currentCategories: prevState.currentCategories.filter(cat => category !== cat),
      }))
    }
  }

  render() {
    const { filteredPosts, searchTerm, currentCategories } = this.state;
    const filterCount = filteredPosts.filter(postEdge => postEdge.node.frontmatter.template === 'post').length
    const categories = this.props.data.categories.group

    return (
      <Layout>
        <Helmet title={`Articles – ${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <h1>Articles</h1>
          <div className="category-container">
            {categories.map(category => {
              const active = currentCategories.includes(category.fieldValue)

              return (
                <div
                  className={`category-filter ${active ? 'active' : ''}`}
                  key={category.fieldValue}
                  onClick={async () => {
                    await this.updateCategories(category.fieldValue)
                    await this.filterPosts()
                  }}
                >
                  {category.fieldValue} <strong className="count">{category.totalCount}</strong>
                </div>
              )
            })}
          </div>
          <div className="search-container">
            <input
              className="search"
              type="text"
              name="searchTerm"
              value={searchTerm}
              placeholder="Type here to filter posts..."
              onChange={this.handleChange}
            />
            <div className="filter-count">{filterCount}</div>
          </div>
          <PostListing postEdges={filteredPosts} />
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query BlogQuery {
    posts: allMdx (limit: 2000, sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          excerpt(pruneLength: 180)
          timeToRead
          tableOfContents
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
    categories: allMdx(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`