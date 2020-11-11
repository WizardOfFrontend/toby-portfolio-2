import React, { useState } from 'react'
import styled from "styled-components"
import Title from "./Title"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"

const query = graphql`
  {
    allStrapiAbouts(sort: {fields: strapiId, order: ASC}) {
      nodes {
        strapiId
        menu
        
        subTitle
        desc {
          id
          name
          date
          eachItem
          logo {
            childImageSharp {
              fixed(width: 125, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(query);
  const { allStrapiAbouts: { nodes: abouts } } = data;
  const [value, setValue] = useState(0);
  const { subTitle, date, desc } = abouts[value];
  return (
    <Wrapper id="abouts" className="section abouts">
      <Title title="About" />
      <div className="abouts-center">
        <div className="btn-container">
          {abouts.map((item, index) => {
            return (
              <button
                // style={{color: `var(--clr-primary-5)`}}
                onClick={() => setValue(index)}
                key={item.strapiId}
                className={`about-btn ${index === value && `active-btn`}`}
              >
                {item.menu}
              </button>
            )
          })}
        </div>
        {/* about info */}
        <article className="about-info">
          <h3 style={{ fontSize: "25px" }}>{subTitle}</h3>
          <p style={{ fontWeight: "bold", fontSize: "20px", marginTop: "1rem" }} className="about-date">{date}</p>
          {
            desc.map(item => {
              return <div key={item.id} className="about-menu">
                <div className="desc">
                  <dis className="exp">
                    <span className="small-title">{item.name}</span>
                    {' '}<span className="date">{item.date}</span>
                  </dis>
                  <p className="about-eachItem"><ReactMarkdown children={item.eachItem} /></p>
                </div>
              </div>
            })
          }
        </article>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);

h3{
      margin-top: 1rem;
      text-align: center;      
    }
h4{
  font-family: "Open-sans", sans-serif;
  line-height: 1.5rem;
}
.abouts-center {
  width: 80vw;
  margin: 0 auto;
  max-width: var(--max-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
.btn-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.about-btn {
  color: white;
  background: #004167;
  /* border-color: transparent; */
  border-radius: 5px;
  text-transform: capitalize;
  font-size: 1.25rem;
  letter-spacing: var(--spacing);
  margin: 0 0.5rem;
  transition: var(--transition);
  cursor: pointer;
  padding: 0.5rem 0;
  line-height: 1;
  outline: none;
  font-size: 18px;
  padding-right: 20px;
  width: 348px;
}

.about-btn:hover {
  color: var(--clr-primary-5);
  box-shadow: 0 2px var(--clr-primary-5);
}

.about-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  h3{
  font-size: 17px;
  font-weight: 400;
  color:  #004167;
  }
  .desc{
  border-radius: var(--radius);
  box-shadow: -2px 5px 5px 0 gray;
  background: var(--clr-grey-9);
  width: 23rem;
  padding-bottom: 1rem;
  font-family: "Open Sans", sans-serif;
  margin-left: 30px;
  p{
    font-size: 1.2rem;
    font-weight: bold;
  }
}
  /* color: var(--clr-grey-5); */
}




.small-title,
.date
 {
  text-transform: uppercase;
  color: #0a76b4;  
  display: inline-block;
  padding: 0.2rem 0.75rem;  
  font-size: 20px;
  font-weight: bold;  
}

.small-title {
  color: var(--clr-primary-5);
 
}

.about-eachItem {
  margin: 0.6rem 1rem;
}

.about-info ul {
  display: flex;
  flex-wrap: wrap;
}

.about-info li{
  text-transform: uppercase;
  color: black;
  background: white;
  display: inline-block;
  padding: 0.2rem 0.75rem;
  border-radius: 5px;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  /* box-shadow: -2px 10px 10px 0 gray; */
  font-size: 15px;
}

.about-info h6{
  text-transform: uppercase;
  color: var(--clr-grey-5);
  background: var(--clr-grey-9);
  display: inline-block;
  padding: 0.375rem 0.75rem;
  border-radius: var(--radius);
  width: 12rem;
}

.about-date {
  letter-spacing: var(--spacing);
}

.about-menu {
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 2rem;
  align-items: center;
  margin-bottom: 1.25rem;
}

.about-menu p {
  margin-bottom: 0;
  color: var(--clr-grey-3);
}

.about-icon {
  color: red;
}

/* 400px보다 크면 */
@media screen and (min-width: 400px) {
  .about-btn {
    font-size: 20px;
  }
  .about-info h3 {
    font-size: 20px;
  }
}

@media screen and (min-width: 800px) {
  .about-info{
    .desc{
      width: 35rem;
    }
  }

}


@media screen and (min-width: 992px) {
  .abouts-center,
  .jobs-center {
    width: 90vw;
    display: grid;
    grid-template-columns: 200px 1fr;
    column-gap: 4rem;
  }
  h3{
    text-align: left;
  }

  .btn-container {
    flex-direction: column;
    justify-content: flex-start;
  }

  .about-btn {
    margin-bottom: 1rem;
    width: 15rem;
  }
  /* .active-btn {
    box-shadow: -2px 0 var(--clr-primary-5);
  } */

  .about-btn:hover {
    box-shadow: -2px 0 var(--clr-primary-5);
  }
}
.active-btn {
  color: gold;
  /* box-shadow: 0 2px gold; */
}
.about-page {
  padding: 7rem 0;
}
.about-img {
  margin-bottom: 2rem;
  height: 25rem;
}
.about-text .section-title {
  margin-bottom: 2rem;
  text-align: left;
}
.about-text .underline {
  margin-left: 0;
  margin-right: 0;
}
.about-text p {
  line-height: 2;
}
.stack-container {
  width: 30rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 0.5rem;
}
.stack-container span {
  text-transform: uppercase;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  color: var(--clr-grey-4);
}
.stack-icon {
  color: var(--clr-primary-5);
  margin-right: 0.25rem;
  font-size: 1rem;
}

  .bg-light {
    background: #f4f4f4;
  }
  h2 {
    margin-top: 3rem;
  }
  .cert{
    font-weight: bold;
  }
  .section-center {
    margin-top: 4rem;
    display: grid;
    .icon{
      color: gold;
    }
      
    /* gap: 2rem; */
    /* safari workaround */
    /* grid-gap: 2rem; */
    /* .icon {
      font-size: 4rem;
      color: var(--clr-primary-5);
      margin-bottom: 1rem;
    } */
    h3{
      margin-top: 1rem;
      text-align: center;
      font-weight: bold;
      font-family: 'Open Sans';      
    }
    p {
      max-width: 35em;
      padding: 0 10px;
    }
    .bio-img{
      display:none;
    }
    .bio,.bio-img {
        border-radius: 10px;
        box-shadow: -2px 10px 10px 0 gray;
    } 
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1em;
      
    }
    @media (min-width: 992px) {
      .about-center {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    column-gap: 4rem;
  }
  .about-img {
    grid-column: 1 / span 5;
    margin-bottom: 0;
  }
  .about-text {
    grid-column: 6 / -1;
  }    
    }
    @media (min-width: 1200px) {
      
      /* grid-template-columns: repeat(4, 1fr); */
    }
  }
`
export default About

