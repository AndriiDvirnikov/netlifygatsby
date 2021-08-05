import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import Conteiner from "../Conteiner"
const SoloBlockBox = styled.div`
  position: relative;
  margin: 45px 0;
`
const SoloText = styled.div`
  font-family: "PT Serif", serif;
  text-align: center;

  overflow: auto;
  margin: auto;
  position: absolute;
  top: 37%;
  left: 0;
  bottom: 0;
  right: 0;
  max-width: 57%;
`
const SoloTitle = styled.h1`
  font-size: 48px;
  font-weight: 400;
  color: #fff;
`
const SoloParagraph = styled.p`
  font-size: 18px;
  color: #fff;
`

export default function SoloBlock({ props }) {
  return (
    <Conteiner>
      <SoloBlockBox>
        <StaticImage
          src="../../images/blogsolo.jpg"
          alt="blogsolo"
          placeholder="tracedSVG"
          quality="40"
        />
        <SoloText>
            <SoloTitle>Proin congue elit fringilla</SoloTitle>
        </SoloText>
      </SoloBlockBox>
    </Conteiner>
  )
}
{
  /*<div className ="conteiner">
                <div className="hold-solo-block">
                    <img src="/blog-final13.jpg" alt="blog-img"/>

                    <div className="text-blog">
                        <h1>Proin congue elit fringilla</h1>
                        <p>sodales tellus interdum fermentum nulla. Aliquam vitae arcu condimentum,
                            consectetur diam sed, ultrices urna.
                        </p>
                    </div>
                    <div className="hold_slider_info">
                        <div className = "slider_info">
                            <div className="categorry blue">
                                <p>People</p>
                            </div>
                            <div className ="author">
                                <p className="date-slider">11 septemvber 2016</p>
                                <p className="author-news">John Doe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/
}
