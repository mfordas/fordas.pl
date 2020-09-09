import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainPage from '../components/mainPage'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainPage />
  </Layout>
)

export default IndexPage
