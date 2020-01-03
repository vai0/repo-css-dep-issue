import React from "react"

import "./StandardLp.scss"

export default ({ title, subtitle, paragraph }) => {
  return (
    <div className="standard-lp">
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
      <div className="paragraph">{paragraph}</div>
    </div>
  )
}
