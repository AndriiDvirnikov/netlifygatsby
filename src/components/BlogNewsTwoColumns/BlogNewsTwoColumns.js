import React from "react"
import styled from "styled-components"
import Conteiner from "../Conteiner"
import BlogTwoNewsCart from "./BlogTwoNewsCart"

const BackGroundGrey = styled.div`
  background-color: #f6f6f6;
`

export default function BlogNewsTwoColumns({ props }) {
  
  return (
    <BackGroundGrey>
      <Conteiner>
        <BlogTwoNewsCart props={props} />
      </Conteiner>
    </BackGroundGrey>
  )
}
