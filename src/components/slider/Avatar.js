import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
const SliderAvatar = styled.div`
  width: 135px;
  height: 135px;
  margin: 0 auto;
`
export default function Avatar() {
  return (
    <SliderAvatar>
      <StaticImage
        src="../images/women.png"
        alt="image"
        width={300}
        placeholder="tracedSVG"
        quality="40"
      />
    </SliderAvatar>
  )
}
