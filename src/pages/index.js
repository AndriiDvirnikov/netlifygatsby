import React from "react"
import Content from "../components/Content"
import Layout from '../components/Layout'
import Newsletter from "../components/Newsletter"
import Slider from '../components/Slider'
export default function Home() {
  return (
    <Layout>
      <Slider />
      <Content />
      <Newsletter />
    </Layout>
  )
}
