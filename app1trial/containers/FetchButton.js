import React from 'react'
import { connect } from 'react-redux'
import { fetcher } from '../actions'

let FetchButton = ({ dispatch }) => (
  <button className="btn btn-primary"
  onClick={ () => dispatch(fetcher()) }>Tyin toFetch</button>
)

FetchButton = connect()(FetchButton)

export default FetchButton
