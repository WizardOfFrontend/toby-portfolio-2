import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import styled from "styled-components"

const Projects = ({projects,title}) => {
  return <Wrapper id="projects" className="section">
  <Title title={title} />
  
  <div className="section-center projects-center">
    {
      projects.map(project=>{
        return <Project key={project.id} {...project} />
      })
    }
  </div>
</Wrapper>
}


const Wrapper = styled.section`
 @media screen and (min-width: 576px) {
  .projects-center {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
    column-gap: 2rem;
  }  
}
`
export default Projects