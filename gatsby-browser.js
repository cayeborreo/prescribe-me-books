/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
// gatsby-browser.js

import React from "react"
import { AppProvider } from "./src/context/context"
import "./src/styles/global.scss"

export const wrapRootElement = ({ element }) => (
  <AppProvider>{element}</AppProvider>
)
