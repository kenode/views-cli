'use strict'

import { existsSync, writeFileSync } from 'fs'
import config from '../config'

const paths = config.utils_paths
const pageName = process.argv.length >= 3 ? process.argv[2] : null

if (existsSync(paths.view(pageName + '.html'))) {
  console.log('this page is true of \'' + pageName + '\'')
  process.exit(0)
}

const jsonData = {
  title: '',
  keywords: '',
  description: '',
  entry: pageName,
  style: pageName
}
writeFileSync(paths.data(pageName + '.json'), JSON.stringify(jsonData, null, 2))
console.log('create %s/%s.json', config.dir_data, pageName)

writeFileSync(paths.asset('sass/' + pageName + '.scss'), '@import \'./libs/base.scss\';\n')
console.log('create %s/sass/%s.scss', config.dir_asset, pageName)

writeFileSync(paths.src(pageName + '.js'), '\'use strict\'\n')
console.log('create %s/%s.js', config.dir_src, pageName)

const html = '{% extends \'layouts/inner.html\' %}\n\r'
           + '{% block style %}{{ style }}{% endblock %}\n'
           + '{% block entry %}{{ entry }}{% endblock %}\n'
           + '{% block bodyer %}\n\r'
           + '{% endblock %}'
writeFileSync(paths.view(pageName + '.html'), html)
console.log('create %s/%s.html', config.dir_view, pageName)

process.exit(0)