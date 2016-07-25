import React from 'react'
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import * as actionCreators from '../actions/index';
import { bindActionCreators } from 'redux';
import Tickets from './Tickets';
import Statuses from './Statuses';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showTicket: true,
      showUpdater: false
    }
    this.showTicketHandler = this.showTicketHandler.bind(this);
    this.showStatusHandler = this.showStatusHandler.bind(this);
  }

  showTicketHandler(e) {
    e.preventDefault();
    this.setState({
      showTicket: true,
      showUpdater: false
    });
  }

  showStatusHandler(e) {
    e.preventDefault();
    this.setState({
      showTicket: false,
      showUpdater: true
    });
  }

  render() {
    return (
      <div>
        <Navbar 
          onTicketChange={this.showTicketHandler}
          onStatusChange={this.showStatusHandler}
            />
        {this.state.showTicket && 
          <Tickets 
            ticketPanel={this.props.ticketPanel} 
            ticketUpdate={this.props.ticketUpdate} 
              />}
        {this.state.showUpdater &&
          <Statuses
            status={this.props.status}
            currentTask={this.props.currentTask}
            task={this.props.task}
            updateStatus={this.props.updateStatus}
              />}
      </div>
    )
  }
}


App.propTypes = {
  currentTask: React.PropTypes.string,
};

function mapStateToProps(state) {
  return {
    currentTask: state.currentTask,
    status: state.status,
    ticketPanel: state.ticketPanel
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

