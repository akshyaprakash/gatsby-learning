import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { page, text } from "../examples/home.module.css"
export default function Home() {
  return (
    <Layout>
      <div className="home-heading">
        <h1>Home Page</h1>
        <h1>Hello World</h1>
        <h1>Hello People</h1>
      </div>

      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/company/history">History</Link>
      </div>
      <a href="/about">Regular Link (it refreshes)</a>
    </Layout>
  )
}
