import React, { useEffect } from 'react'

import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../layout'
import UserInfo from '../components/UserInfo'
import PostTags from '../components/PostTags'
import SEO from '../components/SEO'
import Comment from '../components/Comment'
import RenderMdx from '../components/RenderMdx'

import config from '../../data/SiteConfig'
import { formatDate, editOnGithub } from '../utils/global'

const PostTemplate = (props) => {
  const { pageContext, data } = props;
  const { slug } = pageContext;
  const postNode = data.mdx;
  const post = postNode.frontmatter;
  const commentBox = React.createRef()

  useEffect(() => {
    const commentScript = document.createElement('script');
    const theme = typeof window !== 'undefined' && localStorage.getItem('dark') === 'true' ? 'github-dark' : 'github-light';

    commentScript.async = true
    commentScript.src = 'https://utteranc.es/client.js'
    commentScript.setAttribute('repo', 'chetan8300/chetangodhani-comments') // CHANGE THIS if you're just going to clone this repo and use the code. Do not test your code using my repo.
    commentScript.setAttribute('issue-term', 'pathname')
    commentScript.setAttribute('id', 'utterances')
    commentScript.setAttribute('theme', theme)
    commentScript.setAttribute('crossorigin', 'anonymous')
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(commentScript)
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`)
    }
  }, []) // eslint-disable-line

  let thumbnail

  if (!post.id) {
    post.id = slug
  }

  if (!post.category_id) {
    post.category_id = config.postDefaultCategoryID
  }

  if (post.thumbnail) {
    thumbnail = post.thumbnail.childImageSharp.fixed
  }

  const date = formatDate(post.date)
  const githubLink = editOnGithub(post)
  const twitterShare = `http://twitter.com/share?text=${encodeURIComponent(post.title)}&url=${config.siteUrl}/${post.slug}/&via=chetangodhani`;

  return (
    <Layout>
      <Helmet>
        <title>{`${post.title} – ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <article className="single container">
        <header className={`single-header ${!thumbnail ? 'no-thumbnail' : ''}`}>
          {thumbnail ? <Img fixed={post.thumbnail.childImageSharp.fixed} /> : null}
          <div className="flex">
            <h1>{post.title}</h1>
            <div className="post-meta">
              <time className="date">{date}</time>
/
                <a className="twitter-link" href={twitterShare}>
                Share
                </a>
                /
                <a className="github-link" href={githubLink} target="_blank">
                Edit on Github ✏️
                </a>
            </div>
            <PostTags tags={post.tags} />
          </div>
        </header>
        <div className="post">
          <RenderMdx body={postNode.body} />
        </div>
        <div style={{ marginBottom: 20 }}>
          <a className="button twitter-button" href={twitterShare} target="_blank">
            Share on Twitter
          </a>
        </div>
        <div id="comments">
          <h2>Comments</h2>
          <Comment commentBox={commentBox} />
        </div>
      </article>
      <UserInfo config={config} />
    </Layout>
  )
}

export default PostTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx (frontmatter: { slug: { eq: $slug } }) {
      body
      timeToRead
      excerpt
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        categories
        tags
        template
        slug
        date
        toc
      }
    }
  }
`