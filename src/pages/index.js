import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import NewSlider from "../components/slider/NewSlider"
import { createGlobalStyle } from "styled-components"
import BlogNewsTwoColumns from "../components/BlogNewsTwoColumns/BlogNewsTwoColumns"
import TwoRowNews from "../components/BloWithTwoRowNews/TwoRowNews"
import SoloBlock from "../components/SoloBlock/SoloBlock"

const Global = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    text-decoration: none;
  }
  html, body{
    font-size: 15px;
    line-height: 1.6;
    color: #333;
  }
*::before, 
*::after{
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
h1,h2,h3,h4,h5,h6 {
   margin:0; 
}
`

export default function Home({ data }) {
  return (
    <Layout>
      <Global />
      <NewSlider props={data} />
      <BlogNewsTwoColumns props = {data.twonews} />
      <SoloBlock props={data}/>
      <TwoRowNews props = {data.posts}/>
      {/*<Slider />
      <Content />
      <div className ="content">
        <BlogWithTwoNews props ={data} />
        <Bloglist props={data} />
        <BlogWithTwoNews props ={data} />
      </div>
      <Newsletter />*/}
    </Layout>
  )
}

export const query = graphql`
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
              alt
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
              alt
            }
          }
        }
      }
    }
  }
`
