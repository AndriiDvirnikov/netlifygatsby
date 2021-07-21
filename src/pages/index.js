import React from "react"
import { StaticImage } from 'gatsby-plugin-image'
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
      <StaticImage alt="staticimage" src= "https://get-edu.kz/wp-content/uploads/2020/04/helpbox-contact.jpg" />
    </Layout>
  )
}
