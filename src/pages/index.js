import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { page, text } from "../examples/home.module.css"
export default function Home() {
  return (
    <Layout>
      <div className={page}>
        <h1>Home Page</h1>
        <h1>Hello World</h1>
        <h1>Hello People</h1>
        <p className={text}>
          Anim officia ut laboris voluptate fugiat ea tempor. Adipisicing aliqua
          voluptate sint irure anim duis duis laborum laborum reprehenderit sint
          nulla pariatur. Pariatur laboris aliquip consequat Lorem labore duis
          fugiat anim adipisicing labore nulla reprehenderit.
        </p>
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
