import React from "react"
import styled from "styled-components"
const StyledTextSlider = styled.div`
  width: 530px;
  height: 50%;
  overflow: auto;
  margin: 0 auto;
`
const StyledSliderHeader = styled.h1`
  color: #fff;
  font-family: "PT Serif", serif;
  font-weight: 400;
`
export default function TextSlider() {
  return (
    <StyledTextSlider>
      <StyledSliderHeader>
        Maecenas quis lobortis nunc Nullam sit vel odio congue vulputate a ut
        nisi
      </StyledSliderHeader>
    </StyledTextSlider>
  )
}
