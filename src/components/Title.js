import React from "react"
import styled from "styled-components"

const Title = ({ title }) => {
  return (
    <Wrapper>
      <h2>{title || "default title"}</h2>
      <div className="underline"></div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;    
  }
  .underline {
    width: 5rem;
    height: 0.25rem;    
    background: gold;
    margin: 0 auto;
  }
`
export default Title
