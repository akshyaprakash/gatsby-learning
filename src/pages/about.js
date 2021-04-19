import React from "react"
import Layout from "../components/Layout"
// import { page, text } from "../examples/about.module.css"
import styled from "styled-components"
const about = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>About Page</h1>
        <h1>Hello World</h1>
        <p className="text">
          Proident culpa reprehenderit nostrud est id aliquip nostrud cupidatat
          id ullamco qui ut nisi veniam. Sit excepteur excepteur incididunt
          commodo adipisicing cillum. Tempor est do consequat ad aliqua aliquip
          aliquip. Velit fugiat est cupidatat quis occaecat enim ad.
        </p>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  color: blue;

  h1 {
    color: rebeccapurple;
  }

  .text {
    text-transform: uppercase;
  }
`

export default about
