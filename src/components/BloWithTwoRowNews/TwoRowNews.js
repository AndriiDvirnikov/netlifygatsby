import React from "react"
import styled from "styled-components"
import AuthorAndDate from "../AuthorAndDate"
import Categoria from "../Category"
import Conteiner from "../Conteiner"
const BlogListHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 95px;
  justify-content: space-between;
`
const CartBlog = styled.div`
  width: 31%;
  padding-right: 25px;
`
const BlogImage = styled.div`
  position: relative;
`
const BlogCategoriHold = styled.div`
  bottom: 20px;
  position: absolute;
`
const BlogTitle = styled.p`
  font-family: "PT Serif", serif;
  font-size: 24px;
  font-weight: 400;

  color: #000;
`

export default function TwoRowNews({ props }) {
  console.log("TwoRowNews", props)
  return (
    <Conteiner>
      <BlogListHolder>
        {props.edges.map(posts => (
          <CartBlog key={posts.node.data.title.text}>
            <BlogImage>
              <img
                src={posts.node.data.post_image.url}
                alt={posts.node.data.post_image.alt}
              />
              <BlogCategoriHold>
                <Categoria color={posts.node.data.color_category} />
              </BlogCategoriHold>
            </BlogImage>
            <BlogTitle>{posts.node.data.title.text}</BlogTitle>
            <AuthorAndDate />
          </CartBlog>
        ))}
      </BlogListHolder>
    </Conteiner>
  )
}
