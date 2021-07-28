import React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import Content from "../components/Content"
import Layout from '../components/Layout'
import Newsletter from "../components/Newsletter"
import Slider from '../components/Slider'
import Bloglist from "../components/bloglist"
import { graphql } from "gatsby"
import BlogWithTwoNews from "../components/blog-with-2news"
export default function Home({data}) {
  console.log (data)
  return (
    <Layout>
      <Slider />
      <Content />
      <div className ="content">
        <BlogWithTwoNews props ={data} />
        <Bloglist props={data} />
        <BlogWithTwoNews props ={data} />
      </div>
      <Newsletter />
      
      
    </Layout>
  )
}

export const query = graphql `
query Posts {
  twonews: allPrismicBlogwithtwonews {
    edges {
      node {
        data {
          author {
            text
          }
          category {
            text
          }
          color_category
          data_post_news
          image_news {
            url
          }
          title_news {
            text
          }
        }
      }
    }
  }
 posts: allPrismicArticles {
    edges {
      node {
        data {
          title {
            text
          }
          author {
            text
          }
          category {
            text
          }
          color_category
          datapost
          post_image {
            url
          }
        }
      }
    }
  }
}
`
