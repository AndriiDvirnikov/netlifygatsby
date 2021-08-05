import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import AuthorAndDate from "../AuthorAndDate"
import Categoria from "../Category"
import BlogCartImage from "./BlogCartImage"

const CartBox = styled.div`
  color: #f6f6f6;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 55px 0 30px 0;
`
const CartCategoriHold = styled.div`
  bottom: 20px;
  position: absolute;
`
const CartTitle = styled.div`
  font-family: "PT Serif", serif;
  font-size: 24px;
  font-weight: 400;

  color: #000;
`
const CartBlog = styled.div`
  width: 50%;
  ::last-child {
    padding-right: 0;
  }
`
const CartImageHold = styled.div`
  position: relative;
`

export default function BlogTwoNewsCart({ props }) {
  return (
    <CartBox>
      {props.edges.map(twonews => (
        <CartBlog key={twonews.node.data.title_news.text}>
          <CartImageHold>
            <img
              src={twonews.node.data.image_news.url}
              alt={twonews.node.data.image_news.alt}
            />

            <CartCategoriHold>
              <Categoria color={twonews.node.data.color_category} />
            </CartCategoriHold>
          </CartImageHold>
          <CartTitle>
            <Link to="#">{twonews.node.data.title_news.text}</Link>
          </CartTitle>
          <AuthorAndDate />
        </CartBlog>
      ))}
    </CartBox>
  )
}
