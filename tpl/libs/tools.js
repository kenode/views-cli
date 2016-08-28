'use strict'

import markdownIt from 'markdown-it'

const Markdown = markdownIt({
    html: true,
    xhtmlOut: true,
    linkify: true,
    typographer: true
  })

  export default {
    Markdown
  }