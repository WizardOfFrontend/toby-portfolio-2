require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Toby's portfolio`,
    description: `Home, About, Projects, Testimonial, Contacts`,
    author: `@Toby Chee`,
    titleTemplate: `%s | Toby Chee`,
    url: `https://tobyc.io/`,
    image: `b2.jpg`,
    twitterUsername: `@toby_chee`,
    siteUrl: `https://tobyc.io`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://161.35.12.54` || `http://localhost:8003`,
        queryLimit: 1000, // Default to 100       
        contentTypes: ['abouts', 'projects', 'customers'],
        singleTypes: [],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto`,
          `caveat`,
          'Great Vibes',
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ],
}
