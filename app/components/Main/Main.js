import React, { Component, PropTypes } from 'react'

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
  }

  render () {
    return (
      <div>Main</div>
    )
  }
}
