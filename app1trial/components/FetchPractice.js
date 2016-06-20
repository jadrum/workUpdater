import React from 'react'
import { fetchPractice } from '../actions'
import FetchButton from '../containers/FetchButton'

class FetchPractice extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 top">
              <div className="panel panel-info">
                <div className="panel-heading">
                  <h4>Standard fetch practice</h4>
                </div>
                <div className="panel-body">
                  <ul className="list-unstyled">
                    <li>
                      avatar_url: {this.props.fetchPractice.avatar_url}
                    </li>
                    <li>
                      bio: {this.props.fetchPractice.bio}
                    </li>
                    <li> 
                      events_url: {this.props.fetchPractice.events_url}
                    </li>
                    <li>
                      repos_url: {this.props.fetchPractice.repos_url}
                    </li>
                  </ul>
                  <FetchButton />
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default FetchPractice
