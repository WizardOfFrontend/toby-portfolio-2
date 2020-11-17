import React from "react"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"



const Project = ({ id, title, description, features, github, website, image, stack_item }) => {

  return (
    <Wrapper >
      <div className="project">
        <article>
          <a href={website} target="_blank">
            {
              image &&
              <Image fluid={image.childImageSharp.fluid} className="project-img" />
            }
            <div className="project-card">
              <h4>{title}</h4>
              <div className="description">Main Features</div>
              <p><ReactMarkdown source={features} /></p>
              <div className="project-footer">
                <div className="project-stack">
                  {
                    stack_item.map(item => {
                      return <span key={item.id} className="tech">{item.title}</span>
                    })
                  }
                </div>
                <div className="project-links">
                  <a href={github} target="_blank"><FaGithubSquare className="project-icon" /></a>
                  <a href={website} target="_blank"><FaShareSquare className="project-icon" /></a>
                </div>
              </div>
            </div>
          </a>
        </article>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.project-links{
  margin-top: 1rem;
  margin-right: 13rem;
}
.project-icon {
  color: var(--clr-primary-5);
  font-size: 2rem;
  margin-right: 1.5rem;
  transition: var(--transition);
}
.project-icon:hover {
  color: var(--clr-primary-1);
}

.project-stack span {
  display: inline-block;
  background: white;
  color: #551a8b;
  margin: 0 0.5rem 0.5rem 0rem;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.7rem;
  font-weight: bold;
  box-shadow: -2px 10px 10px 0 gray;
}
.project{
  display: block;
  margin-bottom: 2rem;
  background: var(--clr-grey-10);
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  box-shadow: -2px 10px 10px 0 gray;

}  
.project-card{
      display: grid;
      grid-template-rows: auto 1fr auto;
      padding: 1.5rem 1rem;
      h4{
        color: var(--clr-grey-1);
        font-weight: bold;
        font-family: "Open Sans", sans-serif;
      }
      .description{
        font-size: 14px;
        color: var(--clr-grey-1);
        display: inline-block;
        background: white;
        margin-right: 0.5rem;
        padding: 0.25rem 0.5rem;
        border-radius: var(--radius);
        font-weight: bold;
        width: 7rem;  
      }
  }
  
  .project:hover{
    box-shadow: var(--dark-shadow);
    transform: scale(1.02);
  }
  
  article{
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;     
  }
 
  .project-img {
      border-top-left-radius: var(--radius);
      border-top-right-radius: var(--radius);
      height: 15rem;
    }
    
      .project-footer{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }

        p {
          margin-bottom: 0;
          color: black;
        }
        p:first-of-type {
          display: inline-block;
          background: var(--clr-grey-9);
          margin-right: 0.5rem;
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius);
          text-transform: capitalize;
          letter-spacing: 2px;
          font-size: 0.8rem;
          margin-bottom: 1rem;
          box-shadow: -2px 10px 10px 0 gray;
        }
 
@media screen and (min-width: 576px) {
  .project-img{
    height: 17.5rem;    
  }
}
@media screen and (min-width: 850px) {
  .project-img{
    height: 13.75rem;
  }
}
`
export default Project
