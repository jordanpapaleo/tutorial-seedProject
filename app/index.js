import 'bootstrap/dist/css/bootstrap.min.css'

import debug from 'debug'
import React from 'react'
import { render } from 'react-dom'
import Main from 'components/Main'

const log = debug('application:bootstrap')

log('creating application node')
const applicationNode = document.createElement('div')
applicationNode.className = 'container'
applicationNode.id = 'application'

log('adding application node to body')
document.body.appendChild(applicationNode)

render(<Main />, applicationNode, () => {
  log('finished mounting application')
})
