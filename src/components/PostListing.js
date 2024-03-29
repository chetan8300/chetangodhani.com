import React, { Component } from 'react'
import { Link } from 'gatsby'
import { formatDate } from '../utils/global'
import moment from 'moment'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default class PostListing extends Component {
  getPostList() {
    const { postEdges } = this.props
    const postList = postEdges
      .filter(postEdge => postEdge.node.frontmatter.template === 'post')
      .map(postEdge => {
        return {
          path: postEdge.node.frontmatter.slug,
          tags: postEdge.node.frontmatter.tags,
          thumbnail: postEdge.node.frontmatter.thumbnail,
          title: postEdge.node.frontmatter.title,
          date: postEdge.node.frontmatter.date,
          excerpt: postEdge.node.excerpt,
          timeToRead: postEdge.node.timeToRead,
          categories: postEdge.node.frontmatter.categories,
        }
      })
    return postList
  }

  render() {
    const { simple } = this.props
    const postList = this.getPostList()

    return (
      <section className={`posts ${simple ? 'simple' : ''}`}>
        {postList.map(post => {
          let thumbnail
          if (post.thumbnail) {
            thumbnail = getImage(post.thumbnail)
          }

          const popular = post.categories.includes('Popular')
          const date = formatDate(post.date)
          const newest = moment(post.date) > moment().subtract(1, 'months')

          return (
            <Link to={`/${post.path}`} key={post.title}>
              <div className="each">
                {thumbnail ? <GatsbyImage image={thumbnail} alt={post.title} /> : <div />}
                <div>
                  <h2>{post.title}</h2>
                  {!simple ? <div className="excerpt">{date}</div> : null}
                </div>
                {newest && (
                  <div className="new">
                    <div>New!</div>
                  </div>
                )}
                {popular && !simple && (
                  <div className="popular">
                    <div>Popular</div>
                  </div>
                )}
              </div>
            </Link>
          )
        })}
      </section>
    )
  }
}