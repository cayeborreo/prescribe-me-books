require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Prescribe Me Books`,
    description: `Visit Dr. Libby's clinic and have her prescribe you some books that would do you good.`,
    author: `@cayeborreo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#01b3c9`,
        theme_color: `#01b3c9`,
        display: `minimal-ui`,
        icon: `src/images/prescribe-me-books-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `Questions`,
            // tableView: `YOUR_TABLE_VIEW_NAME`, // optional
            queryName: `Questions`, // optionally default is false - makes all records in this table a separate node type, based on your tableView, or if not present, tableName, e.g. a table called "Fruit" would become "allAirtableFruit". Useful when pulling many airtables with similar structures or fields that have different types. See https://github.com/jbolda/gatsby-source-airtable/pull/52.
            tableLinks: [`answers`, `referringAnswer`, `path`], // optional, for deep linking to records across tables.
            separateNodeType: true, // boolean, default is false, see the documentation on naming conflicts for more information
            separateMapType: false, // boolean, default is false, see the documentation on using markdown and attachments for more information
            tableView: `Ordered`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `Answers`,
            queryName: `Answers`,
            tableLinks: [
              `followUpQuestion`,
              `mainQuestion`,
              `mainPrescription`,
              `otherRecommendations`,
            ],
            separateNodeType: true,
            defaultValues: {
              // currently does not accept null / undefined. use empty string instead
              // and perform your conditional logic on name_of_field.length > 0 ? condition_1 : condition_2
              isFinal: false,
              // ... etc
            },
            mapping: { resultNotes: "text/markdown" },
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `Results`,
            queryName: `Results`,
            separateNodeType: true,
            defaultValues: {
              // currently does not accept null / undefined. use empty string instead
              // and perform your conditional logic on name_of_field.length > 0 ? condition_1 : condition_2
              administration: "",
              // ... etc
            },
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `Paths`,
            queryName: `Paths`,
            separateNodeType: true,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
