module.exports = {
  siteMetadata: {
    title: `mfordas`,
    description: `Mateusz Fordas. Strona na temat konstrukcji części z tworzyw sztucznych w przemyśle Automotive i programowania w JavaScript.`,
    author: `Mateusz Fordas`,
    keywords: ['javascript', 'programowanie', 'html', 'css', 'scss', 'react', 'react-native', 'agile', 'scrum', 'catia', 'nx', 'coding'],
    siteUrl: 'https://www.fordas.pl'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/fordas-icon.png`, // This path is relative to the root of the site.
      },
    },
    
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-149871373-1",
      },
    },
  ],
}
