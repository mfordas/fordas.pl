import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainPageContent from "../components/MainPage/mainpageContent"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainPageContent />
  </Layout>
)

export default IndexPage
