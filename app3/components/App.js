import React from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import TicketUpdates from './TicketUpdates'
import TicketUpdater from '../containers/TicketUpdater'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <TicketUpdates ticketPanel={this.props.ticketPanel}/>
        <TicketUpdater />
      </div>
    )
  }
}

App.propTypes = {
  currentTask: React.PropTypes.string
};

function mapStateToProps(state) {
  return {
    ticketPanel: state.ticketPanel
  }
}

export default connect(mapStateToProps)(App)

