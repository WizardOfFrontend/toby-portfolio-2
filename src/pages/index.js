import React from "react"
import { graphql } from "gatsby"
import {
  Layout,
  Hero,
  About,
  Projects,
} from "../components"
import SEO from "../components/seo"
import Reviews from "../components/Reviews"
import Contact from "../components/Contact"
const HomePage = ({ data }) => {

  const {
    allStrapiProjects: { nodes: projects },
    allStrapiCustomers: { nodes: customers }
  } = data;

  return (
    <Layout>
      <Hero />
      <About />
      <Projects projects={projects} title="projects" />
      <Reviews customers={customers} title="Testimonials" />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(sort: {fields: id, order: ASC}) {
      nodes {
        title       
        features
        github
        website
        id
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack_item {
          title
        }
      }
    },
    allStrapiCustomers(sort: {fields: strapiId, order: DESC}) {
      nodes {
        id
        name
        quote
        strapiId
        title
        image {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }    
  }
`

export default HomePage

