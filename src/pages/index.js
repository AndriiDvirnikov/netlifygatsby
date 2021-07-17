import React from "react"
import Content from "../components/Content"
import Layout from '../components/Layout'
import Newsletter from "../components/Newsletter"
import Slider from '../components/Slider'
import Bloglist from "../components/bloglist"
export default function Home() {
  return (
    <Layout>
      <Slider />
      <Content />
      <Newsletter />
      <Bloglist />
    </Layout>
  )
}
