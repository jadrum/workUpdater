import React from 'react'
import { connect } from 'react-redux'
import { fetch } from '../actions'

let FetchButton = ({ dispatch }) => (
  <button className="btn btn-primary"
  onClick={ () => dispatch(fetch('sup')) }>Tyin toFetch</button>
)

FetchButton = connect()(FetchButton)

export default FetchButton
