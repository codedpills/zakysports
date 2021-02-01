import React from "react"
import styled from "styled-components"

const StyledFooter = styled.div`
  background-color: black;
  color: white;
  padding: 0.5rem;
  margin-top: 2rem;
`

const StyledParagraph = styled.p`
  text-align: center;
`

const Footer = () => {
  return (
    <StyledFooter className="footer">
      <StyledParagraph>
        &copy; ZakySports 2021. All rights reserved.
      </StyledParagraph>
    </StyledFooter>
  )
}

export default Footer
