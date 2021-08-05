import React from "react"
import styled from "styled-components"
import AuthorAndDate from "./AuthorAndDate"


const Category = styled.p`
  z-index: 99999;
  font-family: "PT Sans", sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  padding: 10px 20px;
  background-color: ${props=> props.color};
`


export default function Categoria({color}) {
  return (
        <Category color={color}>People</Category>
  )
}

