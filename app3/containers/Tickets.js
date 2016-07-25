import React from 'react'
import TicketUpdates from '../components/TicketUpdates'
import TicketUpdater from '../components/TicketUpdater'
import * as actionCreators from '../actions/index';
import { bindActionCreators } from 'redux';

class Tickets extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TicketUpdates ticketPanel={this.props.ticketPanel}/>
        <TicketUpdater ticketUpdate={this.props.ticketUpdate}/>
      </div>
    )
  }
}

export default Tickets
