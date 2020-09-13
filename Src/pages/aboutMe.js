import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AboutMeContent from "../components/AboutMe/aboutMeContent"

const AboutMePage = () => (
  <Layout>
    <SEO title="O mnie" />
    <AboutMeContent />
  </Layout>
)

export default AboutMePage
