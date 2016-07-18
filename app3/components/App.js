import React from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import TicketUpdates from './TicketUpdates'
import TicketUpdater from '../containers/TicketUpdater'
import * as actionCreators from '../actions/index';
import { bindActionCreators } from 'redux';

class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <TicketUpdates ticketPanel={this.props.ticketPanel}/>
        <TicketUpdater ticketUpdate={this.props.ticketUpdate}/>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

