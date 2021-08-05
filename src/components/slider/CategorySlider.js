import React from "react"
import styled from "styled-components"
import Categoria from "../Category"
import AuthorAndDate from "../AuthorAndDate"

const BoxCategory = styled.div`
  width: 100%;
  max-width: 1200px;
  position: absolute;
  bottom: 35px;
`
const InfoCategoryHold = styled.div`
  display: flex;
  justify-content: space-between;

`
const Category = styled.p`
  z-index: 99999;
  font-family: "PT Sans", sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  padding: 10px 20px;
  background-color: ${props=> props.color};
`


export default function CategorySlider({color}) {
  return (
    <BoxCategory>
      <InfoCategoryHold>
        <Categoria color={color}/>
        <AuthorAndDate />
      </InfoCategoryHold>
    </BoxCategory>
  )
}

