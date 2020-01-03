import React from "react"

import StandardLp from "components/StandardLp"

export default ({ entry }) => {
  const props = entry.toJS().data

  return <StandardLp {...props} />
}
