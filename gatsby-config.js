require("dotenv").config()

var PrismicDOM = require("prismic-dom")
var Elements = PrismicDOM.RichText.Elements

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-source-prismic",
      options: {
        // The name of your prismic.io repository. This is required.
        // Example: 'gatsby-source-prismic-test-site' if your prismic.io address
        // is 'gatsby-source-prismic-test-site.prismic.io'.
        repositoryName: process.env.PRISMIC_REPOSITORY_NAME,

        // An API access token to your prismic.io repository. This is optional.
        // You can generate an access token in the "API & Security" section of
        // your repository settings. Setting a "Callback URL" is not necessary.
        // The token will be listed under "Permanent access tokens".
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,

        // If you provide a release ID, the plugin will fetch data from Prismic
        // for a specific release. A Prismic release is a way to gather a
        // collection of changes for a future version of your website. Note that
        // if you add changes to a release, you'll need to rebuild your website
        // to see them.
        // See: https://user-guides.prismic.io/en/collections/22653-releases-scheduling#the-basics-of-a-release
        // releaseID: "example-eiyaingiefahyi7z",

        // Set a link resolver function used to process links in your content.
        // Fields with rich text formatting or links to internal content use this
        // function to generate the correct link URL.
        // The document node, field key (i.e. API ID), and field value are
        // provided to the function, as seen below. This allows you to use
        // different link resolver logic for each field if necessary.
        // See: https://prismic.io/docs/javascript/query-the-api/link-resolving
        linkResolver: ({ node, key, value }) => doc => {
          // Your link resolver
          return "/"
        },

        // Set a list of links to fetch and be made available in your link
        // resolver function.
        // See: https://prismic.io/docs/javascript/query-the-api/fetch-linked-document-fields
        fetchLinks: [
          // Your list of links
        ],

        // Set an HTML serializer function used to process formatted content.
        // Fields with rich text formatting use this function to generate the
        // correct HTML.
        // The document node, field key (i.e. API ID), and field value are
        // provided to the function, as seen below. This allows you to use
        // different HTML serializer logic for each field if necessary.
        // See: https://prismic.io/docs/nodejs/beyond-the-api/html-serializer
        htmlSerializer: ({ node, key, value }) => (
          type,
          element,
          content,
          children
        ) => {
          // Your HTML serializer
          switch (type) {
            case Elements.heading1:
              return `<h1>${children.join("")}</h1>`
            case Elements.heading2:
              return `<h2>${children.join("")}</h2>`
            case Elements.heading3:
              return `<h3>${children.join("")}</h3>`
            case Elements.heading4:
              return `<h4>${children.join("")}</h4>`
            case Elements.heading5:
              return `<h5>${children.join("")}</h5>`
            case Elements.heading6:
              return `<h6>${children.join("")}</h6>`
            case Elements.paragraph:
              return `<p>${children.join("")}</p>`
            case Elements.preformatted:
              return `<pre>${children.join("")}</pre>`
            case Elements.strong:
              return `<strong>${children.join("")}</strong>`
            case Elements.em:
              return `<em>${children.join("")}</em>`
            case Elements.listItem:
              return `<li>${children.join("")}</li>`
            case Elements.oListItem:
              return `<li>${children.join("")}</li>`
            case Elements.list:
              return `<ul>${children.join("")}</ul>`
            case Elements.oList:
              return `<ol>${children.join("")}</ol>`
            case Elements.image:
              var linkUrl = element.linkTo
                ? PrismicDOM.Link.url(element.linkTo, () => "/")
                : null
              var linkTarget =
                element.linkTo && element.linkTo.target
                  ? `target="${element.linkTo.target}" rel="noopener"`
                  : ""
              var wrapperClassList = [element.label || "", "block-img"]
              var img = `<img src="${element.url}" alt="${
                element.alt || ""
              }" copyright="${element.copyright || ""}">`
              return `
              <p class="${wrapperClassList.join(" ")}">
                ${
                  linkUrl
                    ? `<a ${linkTarget} href="${linkUrl}">${img}</a>`
                    : img
                }
              </p>
            `
            case Elements.embed:
              return `
              <div data-oembed="${element.oembed.embed_url}"
                data-oembed-type="${element.oembed.type}"
                data-oembed-provider="${element.oembed.provider_name}"
              >
                ${element.oembed.html}
              </div>
            `
            case Elements.hyperlink:
              var target = element.data.target
                ? `target="${element.data.target}" rel="noopener"`
                : ""
              var linkUrl = PrismicDOM.Link.url(element.data, () => "/")
              return `<a ${target} href="${linkUrl}">${children.join("")}</a>`
            case Elements.label:
              var label = element.data.label
                ? ` class="${element.data.label}"`
                : ""
              return `<span ${label}>${children.join("")}</span>`
            case Elements.span:
              return content ? content.replace(/\n/g, "<br />") : ""
            default:
              return null
          }
        },

        // Provide an object of Prismic custom type JSON schemas to load into
        // Gatsby. This is required.
        schemas: {
          // Your custom types mapped to schemas
          homepage: require("./src/schemas/homepage.json"),
          post: require("./src/schemas/post.json"),
          project: require("./src/schemas/project.json"),
        },

        // Set a default language when fetching documents. The default value is
        // '*' which will fetch all languages.
        // See: https://prismic.io/docs/javascript/query-the-api/query-by-language
        lang: "*",

        // Add the Prismic Toolbar script to the site. Defaults to false.
        // Set to "legacy" if your repository requires the older toolbar script.
        // See: https://prismic.io/docs/rest-api/beyond-the-api/the-preview-feature
        // prismicToolbar: true,

        // Set a function to determine if images are downloaded locally and made
        // available for gatsby-transformer-sharp for use with gatsby-image.
        // The document node, field key (i.e. API ID), and field value are
        // provided to the function, as seen below. This allows you to use
        // different logic for each field if necessary.
        // This defaults to always return false.
        shouldDownloadImage: ({ node, key, value }) => {
          // Return true to download the image or false to skip.
          return false
        },

        // Provide a default set of Imgix image transformations applied to
        // Imgix-backed gatsby-image fields. These options will override the
        // defaults set by Prismic.
        // See: https://docs.imgix.com/apis/url
        imageImgixParams: {
          auto: "compress,format",
          fit: "max",
          q: 50,
        },

        // Provide a default set of Imgix image transformations applied to
        // the placeholder images of Imgix-backed gatsby-image fields. These
        // parameters will be applied over those provided in the above
        // `imageImgixParams` option.
        // See: https://docs.imgix.com/apis/url
        imagePlaceholderImgixParams: {
          w: 100,
          blur: 15,
          q: 50,
        },

        // Set the prefix for the filename where type paths for your schemas are
        // stored. The filename will include the MD5 hash of your schemas after
        // the prefix.
        // This defaults to 'prismic-typepaths---${repositoryName}'.
        // typePathsFilenamePrefix:
        // 'prismic-typepaths---gatsby-source-prismic-test-site',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
