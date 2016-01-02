import React, { Component, PropTypes } from 'react'
import TweenMax from 'gsap/src/minified/TweenMax.min.js'

export default class Main extends Component {
  static get displayName () {
    return 'Main'
  }

  static get propTypes () {
    return {}
  }

  static get defaultProps () {
    return {}
  }

  constructor (props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  onClick (e) {
    const el = e.currentTarget

    TweenMax.from(el, 1, {
      css: { rotation: 360 },
      ease: window.Quad.easeInOut
    })
  }

  render () {
    const imgSrc = require('./osx.svg')

    return (
      <div>
        <h1>Main</h1>
        <img src={imgSrc} onClick={this.onClick} />
      </div>
    )
  }
}
