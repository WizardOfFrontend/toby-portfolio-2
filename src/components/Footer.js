import React from "react"
import styled from "styled-components"
const Footer = () => {
  return (
    <Wrapper>
      <p>
      &copy; {new Date().getFullYear()} Toby Chee. &nbsp;&nbsp;All rights reserved.
      </p>
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  height: 5rem;
  display: grid;
  place-items: center;
  background: #004167;
  text-align: center;
  padding: 1rem;
  font-family: "Open Sans", sens-serif;
  p {
    color: var(--clr-white);
    margin-bottom: 0;
    text-transform: uppercase;

    @media (max-width: 576px) {
      font-size: 0.75rem;
    }
  }
`
export default Footer
