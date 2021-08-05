import React from "react"
import styled from "styled-components"

const StyledConteiner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 auto;
`

export default function Conteiner({ children }) {
  return <StyledConteiner>{children}</StyledConteiner>
}
