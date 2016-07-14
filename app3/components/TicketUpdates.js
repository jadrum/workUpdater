import React from 'react'
import { OverlayTrigger } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Popover } from 'react-bootstrap';

const renderUpdate = (ticketUpdate, i) => {
  if (i !== 0) {
    return (
      <tr key={i} className="tableTxtColor">
        <td className="col-xs-2">{ticketUpdate.ticketNum}</td>
        <td className="col-xs-3">{ticketUpdate.author}</td>
        <td className="col-xs-2">{ticketUpdate.date}</td>
        <td className="col-xs-2">{ticketUpdate.time}</td>
        <td className="col-xs-2">{ticketUpdate.currentStatus}</td>
        <td className="col-xs-1">
          <OverlayTrigger trigger="click" placement="left" 
            overlay={<Popover id={i} >{ticketUpdate.details}</Popover>}>
              <Button bsStyle="default" className="overlayButton">details</Button>
          </OverlayTrigger>
        </td>
      </tr>
    )
  }
}

class TicketUpdates extends React.Component {
  constructor(props) {
    super(props);
  }
  
  function() {
    ("[data-toggle=popover]").popover();
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 top">
            <div className="panel panel-info">
              <div className="panel-heading txtCol">
                <h4 className="panelTitle">Ticket Updates</h4>
              </div>
              <table className="table panel-restriction">
                <thead className="thead-default">
                  <tr className="tableTxtColor">
                    <th className="col-xs-2 borderBtm">Ticket Number</th>
                    <th className="col-xs-3 borderBtm">Author</th>
                    <th className="col-xs-2 borderBtm">Date</th>
                    <th className="col-xs-2 borderBtm">Time Spent</th>
                    <th className="col-xs-2 borderBtm">Status</th>
                    <th className="col-xs-1 borderBtm">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.ticketPanel.map(renderUpdate)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TicketUpdates
