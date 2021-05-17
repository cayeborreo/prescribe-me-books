/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { AppProvider } from "./src/context/context"
import "./src/styles/global.scss"

export const wrapRootElement = ({ element }) => (
  <AppProvider>{element}</AppProvider>
)
