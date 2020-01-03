import CMS from "netlify-cms-app"

import "scss/global.scss"

import StandardLpPreview from "cms/previews/StandardLpPreview"

CMS.registerPreviewTemplate("standard-lp", StandardLpPreview)
