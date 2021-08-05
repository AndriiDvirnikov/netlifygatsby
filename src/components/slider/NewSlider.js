import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Conteiner from "../Conteiner"
import Avatar from "./Avatar"
import TextSlider from "./TextSlider"

import CategorySlider from "./CategorySlider"

const Slider = styled.div`
  position: relative;
`
const TextSliderHold = styled.div`
  text-align: center;
  height: 50%;
  overflow: auto;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

const HoldInfoSlider = styled.div`
width: 100%;
max-width: 1200px;
position: absolute;
bottom: 35px;
`

export default function NewSlider({props}) {
    
    const categoryColor = props.posts.edges[0].node.data.color_category;
  return (
    <Slider>
      <StaticImage
        src="../images/slider.jpg"
        alt="image"
        placeholder="tracedSVG"
        quality="40"
      />
      <Conteiner>

        <TextSliderHold>
          <Avatar />
          <TextSlider />
        </TextSliderHold>

        <HoldInfoSlider>
          <CategorySlider color={categoryColor}/>
        </HoldInfoSlider>

      </Conteiner>
    </Slider>
  )
}
