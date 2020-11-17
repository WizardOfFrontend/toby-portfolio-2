import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Title from "./Title"
import styled from "styled-components"
import Image from "gatsby-image"
import { FaQuoteRight } from "react-icons/fa"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"

const Reviews = ({ customers, title }) => {

  const [index, sestIndex] = React.useState(0);
  React.useEffect(() => {
    const lastIndex = customers.length - 1;
    if (index < 0) {
      sestIndex(lastIndex);
    }
    if (index > lastIndex) {
      sestIndex(0);
    }
  }, [index, customers])

  return <Wrapper className="section" style={{paddingBottom:"0"}}>
    <Title title={title} />
    <div className="section-center">
      {customers.map((customer, customerIndex) => {
        const { image, name, title, quote } = customer;
        const customerImg = image.childImageSharp.fixed;

        let position = 'nextSlide';
        if (customerIndex === index) {
          position = "activeSlide";
        }
        if (
          customerIndex === index - 1
          || (index === 0 && customerIndex === customers.length - 1)) {
          position = "lastSlide"
        }
        return (
          <article className={position} key={customerIndex}>
            <Image fixed={customerImg} className="img"></Image>
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        )
      })}
      <button className="prev" onClick={() => sestIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => sestIndex(index + 1)}>
        <FiChevronRight />
      </button>
    </div>
  </Wrapper>
}

const Wrapper = styled.div`
  
  background: var(--clr-grey-10);
  .section-center {
    margin-top: 4rem;
    /* 반드시 width와 height가 있어야 한다 */
    width: 80vw;
    height: 650px;
    max-width: 800px;
    text-align: center;
    position: relative;
    display: flex;
    overflow: hidden;
    .img {
      border-radius: 50%;
      margin-bottom: 1rem;
    }
    h4 {
      text-transform: uppercase;
      color: var(--clr-primary-5);
      margin-bottom: 0.25rem;
      font-family: "Open Sans", sans-serif;
      font-weight: bold;
    }
    .title {
      text-transform: capitalize;
      margin-bottom: 0.75rem;
      font-weight: bold;
    }
    .text {
      max-width: 45em;
      margin: 0 auto;
      line-height: 2;
      color: var(--clr-grey-5);
    }
    .icon {
      font-size: 1.5rem;
      margin-top: 1rem;
      color: var(--clr-primary-5);
    }
    .prev,
    .next {
      position: absolute;
      top: 200px;
      transform: translateY(-50%);
      background: var(--clr-grey-5);
      color: var(--clr-white);
      width: 1.25rem;
      height: 1.25rem;
      display: grid;
      place-items: center;
      border-color: transparent;
      font-size: 1rem;
      border-radius: var(--radius);
      cursor: pointer;
      transition: var(--transition);
    }
    .prev:hover,
    .next:hover {
      background: var(--clr-primary-5);
    }
    .prev {
      left: 0;
    }
    .next {
      right: 0;
    }
    article {
      margin-bottom:0;
    }
    @media (min-width: 660px) {
      .icon{
        font-size: 2.5rem;
      }
    }
    @media (min-width: 800px) {
      .section-center{
        height: 700px;
        .icon {
          font-size: 3rem;
          margin-top: 0.5rem;
          color: var(--clr-primary-5);
        }
      }
      .prev,
      .next {
        width: 2rem;
        height: 2rem;
        font-size: 1.5rem;
      }
    }
    
    article {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0; /*모든 slide의 opacity는 0이고 activeSlide만 1  */
      transition: var(--transition);
    }
    article.activeSlide {
      opacity: 1;
      transform: translateX(0);
    }
    article.lastSlide {
      transform: translateX(-100%);
    }
    article.nextSlide {
      /* all the way to the right.  하지만 opacity가 0이고 parent인 
      section-center의 overflow: hidden;*/
      transform: translateX(100%); 
    }
  }
`
export default Reviews
