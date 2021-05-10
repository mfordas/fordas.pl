import React from "react"

import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainPageContent from "../components/MainPage/mainpageContent"

deckDeckGoHighlightElement();

const IndexPage = () => (
  <Layout>
    <SEO title="Główna" />
    <MainPageContent />
  </Layout>
)

export default IndexPage
