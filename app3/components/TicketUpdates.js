import React from 'react'
import { OverlayTrigger } from 'react-bootstrap';
import { Button, Popover, Modal } from 'react-bootstrap';
var constants = require("../data/constants");

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
    this.state = {
      showModal: false,
      password: '',
    }
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.onPassChange = this.onPassChange.bind(this);
    this.onVerify = this.onVerify.bind(this);
  }
 
  function() {
    ("[data-toggle=popover]").popover();
  };

  close() {
    this.setState({ showModal: false });
  };

  open() {
    this.setState({ showModal: true });
  };

  onPassChange(e) {
    this.setState({
      password: e.target.value
    })
  }

  onVerify() {
    // DO STUFF
    console.log('hi');
    if(this.state.password === constants.masterPass) {
      localStorage.setItem('reduxState', "");
      window.location.reload();
      this.close;
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 top">
            <div className="panel panel-info">
              <div className="panel-heading txtCol">
                <div className="row">
                  <div className="col-xs-10">
                    <h4 className="panelTitle pull-left">Ticket Updates</h4> 
                  </div>
                  <div className="col-xs-2">
                    <Button className="btn btn-default" onClick={this.open}>Reset Updates </Button>
                    <Modal show={this.state.showModal} onHide={this.close}>
                      <Modal.Header closeButton>
                        <Modal.Title>Erase History</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div className="row">
                          <h4 className="col-xs-4 txtCol">Password: </h4>  
                          <div className="col-xs-8">
                            <input className="form-control inputFontSize" 
                              placeholder="Whats the authorized password?"
                              ref="passEnter"
                              onChange={this.onPassChange}
                              value={this.state.password}>
                                </input>
                          </div>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button onClick={this.onVerify}>Submit</Button>
                        <Button onClick={this.close}>Cancel</Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
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
