import React from "react"
import { Link } from "gatsby"

import Layout from "components/layout"

import "./StandardLp.scss"

export default ({ title, subtitle, paragraph }) => {
  return (
    <Layout>
      <div className="standard-lp">
        <Link to="/page-2">Link to page 2</Link>
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
        <div className="paragraph">{paragraph}</div>
      </div>
    </Layout>
  )
}
