import React from "react"
import Layout from "../components/Layout"
import { page, text } from "../examples/about.module.css"
const about = () => {
  return (
    <Layout>
      <div className={page}>
        <h1>About Page</h1>
        <p>
          Proident culpa reprehenderit nostrud est id aliquip nostrud cupidatat
          id ullamco qui ut nisi veniam. Sit excepteur excepteur incididunt
          commodo adipisicing cillum. Tempor est do consequat ad aliqua aliquip
          aliquip. Velit fugiat est cupidatat quis occaecat enim ad.
        </p>
      </div>
    </Layout>
  )
}

export default about
