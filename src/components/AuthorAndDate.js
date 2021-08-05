import React from "react"
import styled from "styled-components"

const Author = styled.div`
  font-size: 14px;
  font-weight: 400;
  display: flex;
  color: #b0b0b0;
  padding-right: 35px;
`
const Date = styled.p`
  margin-right: 10px;
  ::after {
    content: "";
    width: 2px;
    height: 10px;
    padding-right: 10px;
    border-right: 2px solid;
    height: 12px;
  }
`
const AuthorName = styled.p`
  color: #1a54e7;
  text-decoration: underline;
`

export default function AuthorAndDate() {
  return (
    <Author>
      <Date>11 september 2021</Date>
      <AuthorName>John Doe</AuthorName>
    </Author>
  )
}
